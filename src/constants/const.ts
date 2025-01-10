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
    link: 'https://mynotehub.vercel.app/auth',
    github: 'https://github.com/JhefersonCh/notes_app_frontend',
    contribution:
      'Realicé todo el desarrollo, tanto frontend como backend, este era un proyecto universitario, siendo el lider del equipo de desarrollo, tuve que enseñar y explicar el uso de ciertas tecnologías, como React, Express, Sequalize, Tailwind y JavaScript. \n Realicé la base de datos, desplegué el proyecto, tanto base de datos, backend y frontend, y realicé la documentación del proyecto.',
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
    link: 'https://preunab-dev.unab.cl/',
    contribution:
      'Me encargué primeramente del módulo de registro, procedí a realizar contribuciones en ciertos módulos privados tanto para el rol de administrador, superadministrador, estudiantes y docentes. \n Luego se me encargó el rol de fullstack, donde se me dió por tarea particionar la base de datos, realizar autorías de ciertas tablas en la misma, y realizar el módulo de preguntas frecuentes. \n Finalmente, se me entregó la mayor parte de la ciber seguridad, añadiendo rate limits, reCaptcha, autenticacion de rol por endpoints, entre otras funciones.',
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
    link: 'https://project-zen.netlify.app/',
    github: 'https://github.com/JhefersonCh/frontend-project-zen',
    contribution:
      'Me encargué de la mayoría del desarrollo, tanto frontend como backend, al ser un proyecto universitario, se me asignó el rol de Scrum Master y lideré el equipo de desarrollo. \n Realicé la base de datos, desplegué el proyecto, tanto base de datos, backend y frontend, y realicé la documentación del proyecto.',
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
    link: 'https://clm.test.kamilainnovation.co/',
    contribution:
      'Como desarrollador trainee, en este proyecto aprendí a maquetar a niver de frontend, usar Angular, Bootstrap y otras tecnologías, primeramente se me encargó el módulo de inicio de sesión, luego se me encargó la administración de permisos por rol, procedí a realizar contribuciones en algunos módulos privados, manejo de contratación, proveedores de contratos, solicitantes, entre otros.\n Finalmente, me encargué de algunos de los reportes gráficos en el backend para la visualización de los avances en la contratación y otros aspectos.',
    gallery: [
      {
        src: '/projects/ikaro.webp',
        alt: 'ikaro1',
      },
    ],
    tags: [TAGS.ANGULAR, TAGS.NESTJS, TAGS.BOOTSTRAP],
  },
];
