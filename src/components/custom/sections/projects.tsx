import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import ProjectCard from "@/components/custom/cards/project-card";
import { projects } from "@/lib/data/projects";

export default function Projects () {
  return (
    <SectionContainer>
      <div id="projects" className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2>Projects</h2>
          <p>Explore my latest work</p>
        </div>
        {/* Add your project components or content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-start-1 hidden md:flex flex-col gap-8">
            {projects
              .filter((project, index) => index % 2 === 0)
              .map((project, index) => <ProjectCard key={index} project={project} />)}
          </div>
          <div className="col-start-2 hidden md:flex flex-col gap-8">
            {projects
              .filter((project, index) => index % 2 !== 0)
              .map((project, index) => <ProjectCard key={index} project={project} />)}
          </div>
          <div className="col-start-1 flex md:hidden flex-col gap-8">
            {projects
              .map((project, index) => <ProjectCard key={index} project={project} />)}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}