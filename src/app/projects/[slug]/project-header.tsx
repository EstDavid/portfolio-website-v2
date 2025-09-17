'use client';

import { ProjectData } from "@/types/sections-data";
import ImageGalleryDialog from "./image-gallery";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import RichTextParagraph from "@/components/ui/rich-text-paragraph";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function ExternalLink ({ href, title, label }: { href: string, title: string, label: string; }) {
  return (
    <Link
      href={href}
      title={`${title} Web App`}
      target="_blank"
      rel="noopener noreferrer"
      className='underline underline-offset-4 decoration-primary decoration-2'
    >{label}</Link>
  );
}

function GridImage (
  { imageSrc, className, rounded, selectImage }:
    { imageSrc: string; className: string; rounded: undefined | boolean; selectImage: () => void; }
) {
  return (
    <div className={cn("relative h-full cursor-pointer", className)} onClick={selectImage}>
      <div className="absolute inset-0 bg-primary-lighter rounded-full shadow-lg" >
        <Image
          src={imageSrc}
          alt={'project.image.alt'}
          fill
          className={cn("object-cover", rounded ? "rounded-lg" : "")}
        />
      </div>
    </div>
  );
}

export default function ProjectHeader ({ project }: { project: ProjectData; }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  useEffect(() => {
    if (!open && selectedImage !== null) {
      setOpen(true);
    }
    if (open && selectedImage === null) {
      setOpen(false);
    }
  }, [selectedImage, open]);

  const { images } = project;

  const selectNextPrev = (direction: 'next' | 'prev') => {
    setSelectedImage(currentIndex => {
      if (currentIndex === null) {
        return null;
      }
      if (direction === 'next' && currentIndex === images.length - 1) {
        return 0;
      } else if (direction === 'prev' && currentIndex === 0) {
        return images.length - 1;
      } else {
        return currentIndex + (direction === 'next' ? 1 : -1);
      }
    });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-2">
      <ImageGalleryDialog
        isOpen={open}
        images={images.map((image, index) => ({ src: image, alt: `Image ${index}` }))}
        selectedImageIndex={selectedImage ?? 0}
        onClose={() => {
          setSelectedImage(null);
        }}
        onNext={() => {
          selectNextPrev('next');
        }}
        onPrev={() => {
          selectNextPrev('prev');
        }}
      />
      <ScrollArea className="w-full h-[500px] p-4 scroll-none">
        <h1 className="!text-4xl py-2">{project.title}</h1>
        <div className="w-full flex flex-row flex-wrap gap-2 py-4">
          {project.technologies.map((t, i) => <Badge key={i} variant='secondary'>{t}</Badge>)}
        </div>
        <div className="w-full h-full flex gap-6 flex-wrap">
          {project.liveProjectUrl && (
            <ExternalLink
              href={project.liveProjectUrl}
              title={project.title}
              label="See Project Live"
            />
          )}
          {project.githubProjectUrl && (
            <ExternalLink
              href={project.githubProjectUrl}
              title={project.title}
              label="See Project On Github"
            />
          )}
        </div>
        <RichTextParagraph
          content={project.fullDescription}
          nextHeadingLevel={1}
        />
      </ScrollArea>
      <div className="w-full h-[300px] flex gap-2 static lg:sticky top-[calc(var(--spacing-navbar-height)+20px)] p-2 rounded-lg">
        <div className="w-full h-full">
          <GridImage
            imageSrc={images[0]}
            className="w-full h-full"
            selectImage={() => setSelectedImage(0)}
            rounded={project.imageRounded}
          />
        </div>
        {images.length > 1 && (
          <div className="w-full h-full flex flex-col gap-2">
            {images.slice(1, images.length < 5 ? images.length : 3).map((imageSrc, index) => {
              return (
                <GridImage
                  key={index}
                  imageSrc={imageSrc}
                  className="w-full h-full"
                  selectImage={() => setSelectedImage(index + 1)}
                  rounded={project.imageRounded}
                />
              );
            })}
          </div>
        )}
        {images.length === 5 && (
          <div className="w-full h-full flex flex-col gap-2">
            {images.slice(3, 5).map((imageSrc, index) => {
              return (
                <GridImage
                  key={index}
                  imageSrc={imageSrc}
                  className="w-full h-full"
                  selectImage={() => setSelectedImage(index + 3)}
                  rounded={project.imageRounded}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}