'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RichTextParagraph from "@/components/ui/rich-text-paragraph";
import { cn } from "@/lib/utils";
import ProjectDialog from "../dialogs/project-dialog";
import { ProjectData } from "@/types/sections-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function ProjectImage ({ title, src, rounded, landscape, liveProjectUrl, githubProjectUrl }: {
  title: string;
  src: string;
  rounded?: boolean;
  landscape?: boolean;
  liveProjectUrl?: string;
  githubProjectUrl?: string;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      "ontouchstart" in window ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
    );
  }, []);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-48% 0px -48% 0px' }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={cn("relative mb-4 w-full aspect-square", landscape ? 'aspect-16/9' : '')}
    >
      {(liveProjectUrl || githubProjectUrl) &&
        <div className={
          cn(
            "absolute w-full h-full z-10 bg-primaryd/10",
            rounded ? "rounded-lg" : "",
            "opacity-0 hover:opacity-100 transition-opacity duration-200",
            inView && isTouch ? "opacity-100" : ""
          )}>
          {liveProjectUrl ?
            <Button className="absolute bottom-10 left-1/2 -translate-x-1/2" asChild>
              <Link
                href={liveProjectUrl}
                title={`${title} Web App`}
                target="_blank"
                rel="noopener noreferrer"
              >See Project Live</Link>
            </Button>
            :
            <Button className="absolute bottom-10 left-1/2 -translate-x-1/2" asChild>
              <Link
                href={githubProjectUrl as string}
                title={`${title} Project On Github`}
                target="_blank"
                rel="noopener noreferrer"
              ><Github />See Project On Github</Link>
            </Button>
          }
        </div>
      }
      <Image
        src={src}
        alt={`${title} project image`}
        fill
        sizes="(max-width: 768px) 200vw, (max-width: 1200px) 100vw, 50vw"
        className={cn("object-cover", rounded ? 'rounded-lg' : '')} />
    </div>
  );
}

export default function ProjectCard ({ project }: { project: ProjectData; }) {
  return (
    <div className="flex flex-col gap-4 w-full h-fit p-8 bg-background dark:border dark:border-primary dark:shadow-primary dark:shadow-xs rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105">
      {/* Photo gallery */}
      <h3 className="text-primary-light">{project.title}</h3>
      <ProjectImage
        title={project.title}
        src={project.imageSrc}
        rounded={project.imageRounded}
        landscape={project.landscape}
        liveProjectUrl={project.liveProjectUrl}
        githubProjectUrl={project.githubProjectUrl}
      />
      <p><strong>{project.tagline}</strong></p>
      <div className="w-full flex flex-row flex-wrap gap-2">
        {project.technologies.map((t, i) => <Badge key={i} variant='secondary'>{t}</Badge>)}
      </div>
      {/* Project info */}
      <RichTextParagraph
        content={project.shortDescription}
        nextHeadingLevel={1}
      />
      <ProjectDialog title={project.title}>
        <div className="flex flex-col gap-4">
          <ProjectImage title={project.title} src={project.imageSrc} rounded={project.imageRounded} landscape={project.landscape} />
          <p><strong>{project.tagline}</strong></p>
          <div className="w-full flex flex-row flex-wrap gap-2">
            {project.technologies.map((t, i) => <Badge key={i} variant='secondary'>{t}</Badge>)}
          </div>
          <RichTextParagraph
            content={project.fullDescription}
            nextHeadingLevel={1}
          />
        </div>
      </ProjectDialog>
    </div>
  );
}