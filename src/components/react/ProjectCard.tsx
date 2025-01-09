import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { useEffect, useState } from 'react';
import type { Project } from '@/interfaces/interface';

import '../../assets/index.css';
import PhotoSlider from './PhotoSlider';

export function ProjectCard({ project }: { project: Project }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initAOS = async () => {
      AOS.init({});
    };

    initAOS();
  }, []);

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  if (!project || !mounted) return null;

  return (
    <div className="ola">
      <Dialog>
        <DialogTrigger asChild>
          <Card
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-offset="200"
            className="cursor-pointer transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {truncateString(project.description, 60)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden animate-vibration rounded-lg">
                <img
                  className="w-full h-64 object-cover rounded-lg scale-105 hover:scale-100 transition-all duration-500"
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <div className="flex flex-row gap-4">
                <a
                  className="bg-[#3034ff] hover:bg-blue-800 hover:scale-105 font-medium py-2 px-4 rounded text-white transition-all duration-300"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver proyecto
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:border-purple-600 border rounded flex items-center font-medium px-4 py-2 dark:hover:bg-purple-600 transition-all dark:text-white duration-300 hover:scale-105 border-black/50 text-black hover:bg-black/50 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver código
                </a>
              </div>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription className="whitespace-pre-line">
              {`\n${project.description}`}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {/* <img
          className="w-full h-96 object-cover rounded-lg"
          src={project.img}
          alt={project.title}
          loading="lazy"
        /> */}
            <PhotoSlider gallery={project.gallery} />
            <div className="flex justify-center gap-4 mt-6">
              <a
                className="bg-[#3034ff] hover:bg-blue-800 hover:scale-105 font-medium py-2 px-4 rounded text-white transition-all duration-300"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Ver proyecto
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:border-purple-600 border rounded flex items-center font-medium px-4 py-2 dark:hover:bg-purple-600 transition-all dark:text-white duration-300 hover:scale-105 border-black/50 text-black hover:bg-black/50 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                Ver código
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProjectCard;
