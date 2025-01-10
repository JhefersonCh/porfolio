export interface JobExperience {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  description: string;
}

export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  gallery: {
    src: string;
    alt: string;
  }[];
  tags: any[];
  contribution?: string;
}
