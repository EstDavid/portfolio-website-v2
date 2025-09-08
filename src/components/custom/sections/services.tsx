import React from "react";
import SectionContainer from "@/components/custom/layout/section-container";
import { servicesData, servicesSectionText } from "@/lib/data/services";
import ServiceCard from "@/components/custom/cards/service-card";

export default function Services () {
  return (
    <SectionContainer id="services">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2>{servicesSectionText.title}</h2>
          <p className="text-center max-w-[800px] text-medium text-muted-foreground">
            {servicesSectionText.tagline}
          </p>
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