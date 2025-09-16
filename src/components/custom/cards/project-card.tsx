'use client';

import React from "react";
import Image from "next/image";
import RichTextParagraph from "@/components/ui/rich-text-paragraph";
import { cn } from "@/lib/utils";
import { ProjectData } from "@/types/sections-data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getSlug } from "@/lib/server-utils";

function ProjectImage ({ title, src, rounded, landscape }: {
  title: string;
  src: string;
  rounded?: boolean;
  landscape?: boolean;
}) {
  return (
    <div
      className={cn("relative mb-4 w-full aspect-square", landscape ? 'aspect-16/9' : '')}
    >
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
  const slug = getSlug(project.title);
  return (
    <Link
      id={slug}
      href={`/projects/${slug}`}
      className="scroll-m-navbar-height">
      <div
        className={cn(
          "flex flex-col gap-4 w-full h-fit p-8 bg-background dark:border dark:border-primary dark:shadow-primary dark:shadow-xs rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105",
          "scroll-m-[calc(var(--spacing-navbar-height)-var(--spacing-global-padding-y-mobile))] lg:scroll-m-[calc(var(--spacing-navbar-height)-var(--spacing-global-padding-y-mobile))]"
        )}
      >
        {/* Photo gallery */}
        <h3 className="text-primary-light">{project.title}</h3>
        <ProjectImage
          title={project.title}
          src={project.images[0]}
          rounded={project.imageRounded}
          landscape={project.landscape}
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
      </div>
    </Link>
  );
}