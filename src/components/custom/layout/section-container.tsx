import { cn } from '@/lib/utils';
import React from 'react';

const SectionContainer = ({ children, className, ...props }: React.ComponentProps<"section">) => (
  <section className={
    cn(
      "w-full px-global-padding-x-mobile py-global-padding-y-mobile lg:px-global-padding-x-desktop lg:py-global-padding-y-desktop",
      "scroll-m-[calc(var(--spacing-navbar-height)-var(--spacing-global-padding-y-mobile))] lg:scroll-m-[calc(var(--spacing-navbar-height)-var(--spacing-global-padding-y-mobile))]",
      className)
  }
    {...props}
  >
    <div className="max-w-section-max-width mx-auto">
      {children}
    </div>
  </section>
);

export default SectionContainer;