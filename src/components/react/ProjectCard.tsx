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

import '../../assets/index.css';
import PhotoSlider from './PhotoSlider';
import { PROJECTS } from '@/constants/const';
import World from '../icons/World';
import GitHub from '../icons/GitHub';

export function ProjectCard({ id }: { id: number }) {
  const [mounted, setMounted] = useState(false);
  const projects = PROJECTS;
  const project = projects.find((project) => project.id === id);

  useEffect(() => {
    setMounted(true);
    const initAOS = async () => {
      AOS.init({});
    };

    initAOS();

    return () => AOS.refreshHard();
  }, []);

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  };

  const renderTag = (
    tag: {
      name: string;
      class: string;
      icon: any;
    },
    index: number,
  ) => {
    return (
      <li
        key={index}
        className={`flex items-center border dark:border-white/20 rounded-full px-3 py-1 text-sm hover:scale-105 dark:bg-black shadow-md  `}
      >
        <span className="flex items-center gap-x-2">
          <tag.icon className="size-3 md:size-4" />
          {tag.name}
        </span>
      </li>
    );
  };

  if (!project || !mounted) return null;

  return (
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
            <ul className="flex gap-2 flex-wrap justify-center mb-5">
              {project.tags &&
                project.tags.map((tag, index) => renderTag(tag, index))}
            </ul>
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
            <div className="flex justify-center gap-4 mt-6">
              <a
                className="bg-[#3034ff] hover:bg-blue-800 hover:scale-105 font-medium py-2 px-4 rounded text-white transition-all duration-300 flex flex-row gap-1"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <World />
                Web
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:border-purple-600 border rounded items-center font-medium px-4 py-2 dark:hover:bg-purple-600 transition-all dark:text-white duration-300 hover:scale-105 border-black/50 text-black hover:bg-black/50 hover:text-white flex flex-row gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GitHub />
                  Código
                </a>
              )}
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader className="px-5">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription className="whitespace-pre-line text-start">
            {`\n${project.description}`}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="max-h-[200px] md:max-h-[300px] xl:max-h-max overflow-y-auto with-scroll pr-1 pl-5 mr-3">
            <PhotoSlider gallery={project.gallery} />

            <div className="my-5 ">
              {project.contribution &&
                project.contribution.split('\n').map((parrafo, index) => (
                  <p key={index} className="mb-3">
                    {parrafo.trim()}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a
              className="bg-[#3034ff] hover:bg-blue-800 hover:scale-105 font-medium py-2 px-4 rounded text-white transition-all duration-300 flex flex-row gap-1"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <World />
              Web
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:border-purple-600 border rounded items-center font-medium px-4 py-2 dark:hover:bg-purple-600 transition-all dark:text-white duration-300 hover:scale-105 border-black/50 text-black hover:bg-black/50 hover:text-white flex flex-row gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHub />
                Código
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectCard;
