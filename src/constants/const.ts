import Angular from '@/components/icons/Angular';
import AngularMat from '@/components/icons/AngularMat';
import Bootstrap from '@/components/icons/Bootstrap';
import Express from '@/components/icons/Express';
import Nest from '@/components/icons/Nest';
import ReactIcon from '@/components/icons/React';
import Tailwind from '@/components/icons/Tailwind';
import type { JobExperience, Project } from '@/interfaces/interface';

export const EXPERIENCES: JobExperience[] = [
  {
    startDate: 'Octubre 2024',
    endDate: 'Diciembre 2024',
    company: 'SouDev',
    position: 'Desaarrollador Wordpress',
    description:
      'Desarrollador Wordpress Contribuí al desarrollo de una aplicación web en Wordpress para IMPULSA CONSTRUCTORA, optimizando la experiencia del usuario y mejorando la funcionalidad del sitio.',
  },
  {
    startDate: 'Agosto 2024',
    endDate: 'Noviembre 2024',
    company: 'SouDev',
    position: 'Desarrollador Full Stack',
    description:
      'Colaboré en el desarrollo de una aplicación web integral utilizando Angular para el frontend y NestJs para el backend, trabajando en equipo para la UNAB.',
  },

  {
    startDate: 'Mayo 2024',
    endDate: 'Junio 2024',
    company: 'SouDev',
    position: 'Desarrollador Wordpress',
    description:
      'Lideré el desarrollo de una aplicación web en Wordpress para Jhon Alarcón, enfocándome en la personalización y la optimización del rendimiento del sitio.',
  },
  {
    startDate: 'Enero 2024',
    endDate: 'Julio 2024',
    company: 'Kamila Innovation',
    position: 'Desarrollador Trainee',
    description:
      'Contribuí a la implementación de soluciones innovadoras en una aplicación web con Angular para la alcaldía de Sibundoy (Ikaro), mejorando la accesibilidad y la interacción del usuario',
  },
];

export const TAGS: Record<string, { name: string; icon: any }> = {
  ANGULAR: {
    name: 'ANGULAR',
    icon: Angular,
  },
  NESTJS: {
    name: 'NESTJS',
    icon: Nest,
  },
  ANGULAR_MAT: {
    name: 'ANGULAR MATERIAL',
    icon: AngularMat,
  },
  BOOTSTRAP: {
    name: 'BOOTSTRAP',
    icon: Bootstrap,
  },
  REACT: {
    name: 'REACT',
    icon: ReactIcon,
  },
  EXPRESS: {
    name: 'EXPRESS',
    icon: Express,
  },
  TAILWIND: {
    name: 'TAILWINDCSS',
    icon: Tailwind,
  },
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    img: '/projects/noteshub.webp',
    title: 'NotesHub',
    description:
      'NotesHub es un proyecto para la gestión de notas personales, donde se pueden crear, editar y eliminar notas. Manejando el estado, prioridad, categorías y más características. \n\n NotesHub fue desarrollado con React, Express, Sequalize, Tailwind y JavaScript durante aproximadamente 3 semanas, para la Universidad, y se desplegó en Vercel.',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
    gallery: [
      {
        src: '/projects/noteshub.webp',
        alt: 'NotesHub1',
      },
      {
        src: '/projects/noteshub2.webp',
        alt: 'NotesHub2',
      },
      {
        src: '/projects/noteshub3.webp',
        alt: 'NotesHub3',
      },
      {
        src: '/projects/noteshub4.webp',
        alt: 'NotesHub4',
      },
    ],
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND],
  },
  {
    id: 2,
    img: '/projects/preunab.webp',
    title: 'PreUNAB',
    description:
      'PreUNAB es un proyecto universitario que permite a los estudiantes de la UNAB realizar sus ensayos, prácticas y otros. Los docentes de la UNAB pueden acceder a este proyecto para monitorear el avance de sus estudiantes.',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
    gallery: [
      {
        src: '/projects/preunab.webp',
        alt: 'preunab1',
      },
      {
        src: '/projects/preunab.webp',
        alt: 'preunab2',
      },
    ],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
  {
    id: 3,
    img: '/projects/projectzen.webp',
    title: 'ProjectZen',
    description:
      'ProjectZen es un proyecto de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas. También permite a los usuarios crear y editar proyectos, y asignar tareas a los miembros del equipo. ProjectZen nació como un proyecto universitario, fue desarrollado con Angular, NestJs, TypeOrm, Bootstrap y TypeScript durante aproximadamente 3 meses, y se desplegó en Netlify.',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
    gallery: [
      {
        src: '/projects/projectzen.webp',
        alt: 'ProjectZen1',
      },
      {
        src: '/projects/projectzen2.webp',
        alt: 'ProjectZen2',
      },
      {
        src: '/projects/projectzen3.webp',
        alt: 'ProjectZen3',
      },
      {
        src: '/projects/projectzen4.webp',
        alt: 'ProjectZen4',
      },
      {
        src: '/projects/projectzen5.webp',
        alt: 'ProjectZen5',
      },
      {
        src: '/projects/projectzen6.webp',
        alt: 'ProjectZen6',
      },
      {
        src: '/projects/projectzen7.webp',
        alt: 'ProjectZen7',
      },
    ],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
  {
    id: 4,
    img: '/projects/ikaro.webp',
    title: 'iKARO',
    description:
      'iKaro es un proyecto para la aclaldía de Sibundoy, implementada para el manejo de los documentos de contratación de la alcaldía.',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
    gallery: [
      {
        src: '/projects/ikaro.webp',
        alt: 'ikaro1',
      },
    ],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
];
