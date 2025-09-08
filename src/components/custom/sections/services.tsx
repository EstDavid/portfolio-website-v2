import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import { servicesData } from "@/lib/data/services";
import ServiceCard from "@/components/custom/cards/service-card";

export default function Services () {
  return (
    <SectionContainer id="services">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2>Let's build together</h2>
          <p className="text-center max-w-[800px]">As a developer, I wear many hats, from crafting friendly and attractive user interfaces to building robust backend systems. My diverse skill set allows me to tackle projects from multiple angles.</p>
        </div>
        {/* Add your project components or content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicesData
            .map((service, index) => <ServiceCard key={index} service={service} />)}
          {/* <div className="flex md:hidden flex-col gap-8">
          </div> */}
        </div>
      </div>
    </SectionContainer>
  );
}