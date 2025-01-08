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
    description: 'Descripción del proyecto 1',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
  },
  {
    id: 2,
    img: '/projects/preunab.webp',
    title: 'PreUNAB',
    description: 'Descripción del proyecto 1',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
  },
  {
    id: 3,
    img: '/projects/projectzen.jpg',
    title: 'ProjectZen',
    description: 'Descripción del proyecto 1',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
  },
  {
    id: 4,
    img: '/projects/ikaro.webp',
    title: 'iKARO',
    description: 'Descripción del proyecto 1',
    link: 'https://www.google.com',
    github: 'https://www.github.com',
  },
];
