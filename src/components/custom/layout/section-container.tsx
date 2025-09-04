import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className }) => (
  <section className={
    cn(
      "w-full px-global-padding-x-mobile py-global-padding-y-mobile lg:px-global-padding-x-desktop lg:py-global-padding-y-desktop",
      className)
  }>
    <div className="max-w-section-max-width mx-auto">
      {children}
    </div>
  </section>
);

export default SectionContainer;