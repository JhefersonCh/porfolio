import Angular from '@/components/icons/Angular';
import AngularMat from '@/components/icons/AngularMat';
import Bootstrap from '@/components/icons/Bootstrap';
import Express from '@/components/icons/Express';
import Nest from '@/components/icons/Nest';
import ReactIcon from '@/components/icons/React';
import Tailwind from '@/components/icons/Tailwind';
import type { JobExperience, Project } from '@/interfaces/interface';

export const TAGS: Record<string, { name: string; icon: any }> = {
  ANGULAR: {
    name: 'Angular',
    icon: Angular,
  },
  NESTJS: {
    name: 'NestJS',
    icon: Nest,
  },
  ANGULAR_MAT: {
    name: 'Angular Material',
    icon: AngularMat,
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: Bootstrap,
  },
  REACT: {
    name: 'React',
    icon: ReactIcon,
  },
  EXPRESS: {
    name: 'Express',
    icon: Express,
  },
  TAILWIND: {
    name: 'TailwindCSS',
    icon: Tailwind,
  },
};

export const EXPERIENCES: JobExperience[] = [
  {
    startDate: 'Octubre 2024',
    endDate: 'Diciembre 2024',
    company: 'SouDev',
    position: 'Desarrollador WordPress',
    description:
      'Contribuí al desarrollo de una aplicación web en WordPress para IMPULSA CONSTRUCTORA, optimizando la experiencia del usuario y mejorando la funcionalidad general del sitio.\n',
  },
  {
    startDate: 'Agosto 2024',
    endDate: 'Noviembre 2024',
    company: 'SouDev',
    position: 'Desarrollador Full Stack',
    description:
      'Participé en el desarrollo de una aplicación web integral para la UNAB, utilizando Angular en el frontend y NestJS en el backend, trabajando en colaboración con un equipo multidisciplinario.\n',
  },
  {
    startDate: 'Mayo 2024',
    endDate: 'Junio 2024',
    company: 'SouDev',
    position: 'Desarrollador WordPress',
    description:
      'Lideré el desarrollo de una aplicación web en WordPress para Jhon Alarcón, enfocándome en la personalización del diseño y la optimización del rendimiento del sitio.\n',
  },
  {
    startDate: 'Enero 2024',
    endDate: 'Julio 2024',
    company: 'Kamila Innovation',
    position: 'Desarrollador Trainee',
    description:
      'Contribuí a la implementación de soluciones innovadoras en una aplicación web para la alcaldía de Sibundoy (iKaro), utilizando Angular para mejorar la accesibilidad y la interacción del usuario.\n',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    img: '/projects/noteshub.webp',
    title: 'NotesHub',
    description:
      'NotesHub es una aplicación para la gestión de notas personales. Permite crear, editar y eliminar notas, además de manejar estados, prioridades y categorías.\nEste proyecto fue desarrollado con React, Express, Sequelize, Tailwind y JavaScript en aproximadamente 3 semanas, como parte de un proyecto universitario. Fue desplegado en Vercel.\n',
    link: 'https://mynotehub.vercel.app/auth',
    github: 'https://github.com/JhefersonCh/notes_app_frontend',
    contribution:
      'Me encargué del desarrollo completo, tanto del frontend como del backend. Como líder del equipo, enseñé y expliqué el uso de tecnologías como React, Express y Tailwind.\nDiseñé la base de datos, implementé la infraestructura para el despliegue y elaboré la documentación del proyecto.\n',
    gallery: [
      { src: '/projects/noteshub.webp', alt: 'NotesHub1' },
      { src: '/projects/noteshub2.webp', alt: 'NotesHub2' },
      { src: '/projects/noteshub3.webp', alt: 'NotesHub3' },
      { src: '/projects/noteshub4.webp', alt: 'NotesHub4' },
    ],
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND],
  },
  {
    id: 2,
    img: '/projects/preunab.webp',
    title: 'PreUNAB',
    description:
      'PreUNAB es una plataforma universitaria que permite a los estudiantes de la UNAB realizar ensayos y prácticas, mientras los docentes pueden monitorear su progreso.\n',
    link: 'https://preunab-dev.unab.cl/',
    contribution:
      'Primero trabajé en el módulo de registro. Posteriormente, realicé contribuciones en módulos privados para roles como administrador, superadministrador, estudiantes y docentes.\nMás adelante, asumí tareas de partición de base de datos, auditoría de tablas y desarrollo del módulo de preguntas frecuentes. También implementé funciones avanzadas de ciberseguridad como rate limits, reCaptcha y autenticación por roles.\n',
    gallery: [
      { src: '/projects/preunab.webp', alt: 'PreUNAB1' },
      { src: '/projects/preunab.webp', alt: 'PreUNAB2' },
    ],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
  {
    id: 3,
    img: '/projects/projectzen.webp',
    title: 'ProjectZen',
    description:
      'ProjectZen es una herramienta de gestión de tareas y proyectos. Permite crear, editar y asignar tareas a miembros del equipo.\nFue desarrollado como proyecto universitario con Angular, NestJS, TypeORM, Bootstrap y TypeScript en 3 meses, y se desplegó en Netlify.\n',
    link: 'https://project-zen.netlify.app/',
    github: 'https://github.com/JhefersonCh/frontend-project-zen',
    contribution:
      'Fui responsable de la mayoría del desarrollo. Como Scrum Master, lideré el equipo, diseñé la base de datos, implementé el backend y frontend.\nDesplegué el proyecto y elaboré su documentación.\n',
    gallery: [
      { src: '/projects/projectzen.webp', alt: 'ProjectZen1' },
      { src: '/projects/projectzen2.webp', alt: 'ProjectZen2' },
      { src: '/projects/projectzen3.webp', alt: 'ProjectZen3' },
      { src: '/projects/projectzen4.webp', alt: 'ProjectZen4' },
      { src: '/projects/projectzen5.webp', alt: 'ProjectZen5' },
      { src: '/projects/projectzen6.webp', alt: 'ProjectZen6' },
      { src: '/projects/projectzen7.webp', alt: 'ProjectZen7' },
    ],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
  {
    id: 4,
    img: '/projects/ikaro.webp',
    title: 'iKARO',
    description:
      'iKARO es un sistema para la alcaldía de Sibundoy, diseñado para gestionar documentos relacionados con la contratación pública.\n',
    link: 'https://clm.test.kamilainnovation.co/',
    contribution:
      'Desarrollé interfaces de usuario utilizando Angular y Bootstrap, enfocándome en la maquetación y experiencia del usuario.\nParticipé en la implementación del módulo de inicio de sesión, gestionando permisos por roles y contribuyendo al desarrollo de varios módulos privados relacionados con contrataciones y proveedores.\nAdemás, diseñé y generé reportes gráficos en el backend para la visualización de datos clave sobre procesos de contratación, optimizando la toma de decisiones basada en datos.',
    gallery: [{ src: '/projects/ikaro.webp', alt: 'iKARO1' }],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
];
