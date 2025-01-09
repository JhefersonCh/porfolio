import type { JobExperience, Project } from '@/interfaces/interface';

export const EXPERIENCES: JobExperience[] = [
  {
    startDate: 'Enero 2022',
    endDate: 'Presente',
    company: 'TechCorp',
    position: 'Desarrollador Senior',
    description:
      'Lidero un equipo de desarrollo en proyectos de software empresarial. Implementé prácticas de CI/CD que aumentaron la eficiencia del equipo en un 30%.',
  },
  {
    startDate: 'Marzo 2020',
    endDate: 'Diciembre 2021',
    company: 'InnoSoft',
    position: 'Desarrollador Full Stack',
    description:
      'Desarrollé y mantuve aplicaciones web utilizando React y Node.js. Colaboré en la migración de una aplicación monolítica a una arquitectura de microservicios.',
  },
  {
    startDate: 'Junio 2018',
    endDate: 'Febrero 2020',
    company: 'WebSolutions',
    position: 'Desarrollador Frontend Junior',
    description:
      'Trabajé en el desarrollo de interfaces de usuario responsivas utilizando HTML, CSS y JavaScript. Participé en la implementación de un nuevo diseño de sistema que mejoró la experiencia del usuario.',
  },
  {
    startDate: 'Enero 2018',
    endDate: 'Mayo 2018',
    company: 'CodeAcademy',
    position: 'Pasante de Desarrollo Web',
    description:
      'Asistí en el desarrollo de pequeños proyectos web y aprendí las mejores prácticas de la industria. Participé en sesiones de revisión de código y mejoré mis habilidades de programación.',
  },
];

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
        src: '/projects/projectzen.jpg',
        alt: 'ProjectZen1',
      },
    ],
  },
  {
    id: 3,
    img: '/projects/projectzen.jpg',
    title: 'ProjectZen',
    description:
      'ProjectZen es un proyecto de gestión de tareas que permite a los usuarios crear, editar y eliminar tareas. También permite a los usuarios crear y editar proyectos, y asignar tareas a los miembros del equipo. ProjectZen nació como un proyecto universitario, fue desarrollado con Angular, NestJs, TypeOrm, Bootstrap y TypeScript durante aproximadamente 3 meses, y se desplegó en Netlify.',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
    gallery: [
      {
        src: '/projects/projectzen.jpg',
        alt: 'ProjectZen1',
      },
    ],
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
        src: '/projects/projectzen.jpg',
        alt: 'ProjectZen1',
      },
    ],
  },
];
