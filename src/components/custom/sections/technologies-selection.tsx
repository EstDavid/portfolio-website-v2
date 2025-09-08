'use client';

import { useState } from "react";
import { TechnologyData, TechnologyCategory } from "@/types/sections-data";
import TechnologyCard from "@/components/custom/cards/technology-card";
import { Button } from "@/components/ui/button";

export default function TechnologiesSelection ({ technologies }: { technologies: TechnologyData[]; }) {
  const [filter, setFilter] = useState('All');
  const filterOptions = ['All', ...Object.values(TechnologyCategory)];

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-full flex justify-center">
        <div className="bg-primary-lightest dark:bg-primary-darkest rounded-xl p-2 flex flex-col sm:flex-row gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option}
              variant={filter === option ? 'default' : 'outline'}
              onClick={() => setFilter(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 bg-primary-lightest dark:bg-primary-darker rounded-lg p-4">
        {technologies
          .filter(technology => filter === 'All' || technology.categories.includes(filter as TechnologyCategory))
          .map((technology, index) => <TechnologyCard key={index} technology={technology} />)}
      </div>
    </div>
  );
}