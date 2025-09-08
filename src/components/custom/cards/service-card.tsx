import React from "react";
import RichTextParagraph from "@/components/ui/rich-text-paragraph";
import { ServiceData } from "@/types/sections-data";

export default function ServiceCard ({ service }: { service: ServiceData; }) {
  const Icon = service.icon;
  return (
    <div className="flex flex-col gap-4 w-full p-4 bg-background dark:border dark:border-primary dark:shadow-primary dark:shadow-xs rounded-2xl shadow-lg transition-transform duration-200 hover:scale-110"
    >
      <Icon size={40} className="mx-auto" />
      <h3 className="text-primary-light">{service.title}</h3>
      <p><strong>{service.tagline}</strong></p>

      <RichTextParagraph
        content={service.description}
        nextHeadingLevel={1}
      />
    </div>
  );
}