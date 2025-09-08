import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/lib/data/hero";

const Hero: React.FC = () => {
  return (
    <SectionContainer>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          <h1 className="!text-4xl md:!text-5xl lg:!text-6xl font-bold tracking-tighter">
            {heroData.title}
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            {heroData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {heroData.buttons.map((btn) => (
              <Button key={btn.label} size="lg" variant={btn.variant as "default" | "outline"} asChild>
                <Link href={btn.href}>{btn.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 bg-primary-lighter rounded-full" />
            <Image
              src={heroData.image.src}
              alt={heroData.image.alt}
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;