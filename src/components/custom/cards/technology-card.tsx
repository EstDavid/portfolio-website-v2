import React from "react";
import { TechnologyData } from "@/types/sections-data";
import Image from "next/image";

export default function TechnologyCard ({ technology }: { technology: TechnologyData; }) {
  return (
    <div
      className="flex flex-col w-[80px] md:w-[120px] bg-background dark:bg-foreground/80 aspect-square items-center p-2 justify-around shadow-primary-lighter hover:shadow-primary dark:border dark:border-primary dark:shadow-primary shadow-sm rounded-2xl hover:shadow-md transition-transform duration-200 hover:scale-110"
    >
      <div className="relative w-[40px] md:w-[60px] aspect-square">
        <Image
          src={technology.icon}
          alt={`${technology.name} icon`}
          fill
          sizes="100px"
          className="object-fit"
        />
      </div>
      <p className="font-semibold text-foreground dark:text-background text-center text-tiny md:text-small">{technology.name}</p>
    </div>
  );
}