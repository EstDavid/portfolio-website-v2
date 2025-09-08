import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import { technologiesData } from "@/lib/data/technologies-data";
import TechnologiesSelection from "./technologies-selection";

export default function Technologies () {
  return (
    <SectionContainer id="technologies">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2>Tech Stack</h2>
        </div>
        <TechnologiesSelection technologies={technologiesData} />
      </div>
    </SectionContainer>
  );
}