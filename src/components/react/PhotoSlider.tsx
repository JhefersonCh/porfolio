import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './PhotoSlider.css';

const PhotoSlider = ({
  gallery,
}: {
  gallery: { src: string; alt: string }[];
}) => {
  useEffect(() => {
    if (gallery?.length > 0) {
      const swiper = new Swiper('.swiper', {
        modules: [Pagination, Autoplay],
        loop: gallery.length > 1,
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, [gallery]);

  return (
    <div className="swiper w-full">
      <div className="swiper-wrapper" id="my-slider">
        {gallery?.map(({ src, alt }, index) => (
          <a
            key={index}
            className="swiper-slide"
            href={src}
            data-pswp-width="800"
            data-pswp-height="800"
            target="_blank"
            rel="noopener noreferrer"
            data-cropped="true"
          >
            <img src={src} alt={alt} />
          </a>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default PhotoSlider;
