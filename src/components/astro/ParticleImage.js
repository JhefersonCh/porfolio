import * as THREE from 'three';
import { gsap } from 'gsap';

export class ParticleImage {
  constructor(container) {
    this.container = container;
    this.canvas = container.querySelector('canvas');
    this.imageSrc = container.dataset.image;
    this.width = parseInt(container.dataset.width);
    this.height = parseInt(container.dataset.height);
    this.isHovering = false;
    this.originalPositionsCompleted = false;
    this.originalImage = container.querySelector('img');
    this.originalImageSence = null;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      2000,
    );
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });

    this.particles = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.init();
  }

  async init() {
    try {
      this.renderer.setSize(this.width, this.height, false);
      this.renderer.setPixelRatio(window.devicePixelRatio);

      const distance = Math.max(this.width, this.height) * 1.5;
      this.camera.position.z = distance;

      const image = await this.loadImage(this.imageSrc);

      const imageData = this.getImageData(image);
      this.createParticles(imageData);

      this.container.addEventListener('mouseover', () => this.onHover(true));
      this.container.addEventListener('mouseout', () => this.onHover(false));

      this.animate();
    } catch (error) {
      console.error('Error initializing ParticleImage:', error);
    }
  }

  loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  }

  getImageData(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height = this.height;

    ctx.drawImage(image, 0, 0, this.width, this.height);
    ctx.save();
    ctx.beginPath();
    ctx.clip();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    return ctx.getImageData(0, 0, this.width, this.height);
  }

  createParticles(imageData) {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const originalPositions = [];

    const step = 6;

    for (let y = 0; y < this.height; y += step) {
      for (let x = 0; x < this.width; x += step) {
        const i = (y * this.width + x) * 4;
        const r = imageData.data[i] / 255;
        const g = imageData.data[i + 1] / 255;
        const b = imageData.data[i + 2] / 255;
        const a = imageData.data[i + 3] / 255;

        if (a > 0.5) {
          const px = x - this.width / 2;
          const py = -(y - this.height / 2);
          const pz = 0;

          const brightness = (r + g + b) / 3;
          const baseSize = 4;
          const sizeVariation = brightness * 2 + baseSize;

          positions.push(px, py, pz);
          colors.push(r, g, b);
          sizes.push(sizeVariation);
          originalPositions.push(px, py, pz);
        }
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3),
    );
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 8,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.NormalBlending,
    });

    this.particles = new THREE.Points(geometry, material);
    this.originalPositions = originalPositions;

    this.disperseParticles();
    this.scene.add(this.particles);
  }

  disperseParticles() {
    const positions = this.particles.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 450;
      const height = (Math.random() - 0.5) * 500;

      positions[i] = Math.cos(angle) * radius;
      positions[i + 1] = height;
      positions[i + 2] = Math.sin(angle) * radius;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
  }

  onHover(isHovering) {
    if (!this.particles) return;
    this.isHovering = isHovering;

    const positions = this.particles.geometry.attributes.position.array;
    const totalParticles = positions.length / 3;
    let completedAnimations = 0;

    if (isHovering) {
      gsap.killTweensOf(positions);
      for (let i = 0; i < positions.length; i += 3) {
        gsap.to(positions, {
          duration: 1.5,
          [i]: this.originalPositions[i],
          [i + 1]: this.originalPositions[i + 1],
          [i + 2]: this.originalPositions[i + 2],
          ease: 'power2.inOut',
          onUpdate: () => {
            this.particles.geometry.attributes.position.needsUpdate = true;
          },
          onComplete: () => {
            completedAnimations++;
            if (completedAnimations === totalParticles) {
              this.showOriginalImage();
            }
          },
        });
      }
      gsap.to(this.camera.position, {
        z: Math.max(this.width, this.height) * 0.6,
        duration: 1,
        ease: 'power2.inOut',
      });

      this.particles.rotation.y = 0;
    } else {
      gsap.killTweensOf(positions);
      for (let i = 0; i < positions.length; i += 3) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 450;
        const height = (Math.random() - 0.5) * 500;

        gsap.to(positions, {
          duration: 2,
          [i]: Math.cos(angle) * radius,
          [i + 1]: height,
          [i + 2]: Math.sin(angle) * radius,
          ease: 'power2.inOut',
          onUpdate: () => {
            this.particles.geometry.attributes.position.needsUpdate = true;
          },
        });
      }

      gsap.to(this.camera.position, {
        z: Math.max(this.width, this.height) * 1.5,
        duration: 1,
        ease: 'power2.inOut',
      });

      this.renderParticles();
    }
  }

  showOriginalImage() {
    const image = this.originalImage;

    const texture = new THREE.Texture(image);
    texture.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
      transparent: true,
      alphaTest: 0.1,
    });

    const geometry = new THREE.PlaneGeometry(this.width, this.height);
    const plane = new THREE.Mesh(geometry, material);
    this.originalImageSence = plane;

    this.scene.remove(this.particles);

    this.scene.add(this.originalImageSence);

    this.renderer.render(this.scene, this.camera);
  }

  renderParticles() {
    this.scene.add(this.particles);
    this.scene.remove(this.originalImageSence);
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.particles) {
      if (!this.isHovering) {
        this.particles.rotation.y += 0.002;
        const positions = this.particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.1;
        }
      }

      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
