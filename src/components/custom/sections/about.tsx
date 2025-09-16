import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import Image from "next/image";
import RichTextParagraph from "@/components/ui/rich-text-paragraph";
import { aboutData } from "@/lib/data/about";

export default function About () {
  return (
    <SectionContainer id='about'>
      <div className="w-full flex justify-center mb-10">
        <h2>{aboutData.title}</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          <RichTextParagraph content={aboutData.description}></RichTextParagraph>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 bg-primary-lighter rounded-full" />
            <Image
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
