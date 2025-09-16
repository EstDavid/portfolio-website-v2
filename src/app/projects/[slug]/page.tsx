import SectionContainer from "@/components/custom/layout/section-container";
import { projects } from "@/lib/data/projects";
import { getSlug } from "@/lib/server-utils";
import ProjectHeader from "./project-header";
import Link from "next/link";
import { ArrowLeft, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string; }>;
}

export default async function Page ({ params }: PageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(pr => {
    return slug === getSlug(pr.title);
  });
  const previousProjectIndex = projectIndex === 0 ? null : projectIndex - 1;
  const nextProjectIndex = projectIndex === projects.length - 1 ? null : projectIndex + 1;

  const project = projects[projectIndex];
  const previousProjectSlug = previousProjectIndex !== null && getSlug(projects[previousProjectIndex].title);
  const nexProjectSlug = nextProjectIndex !== null && getSlug(projects[nextProjectIndex].title);

  if (!project) {
    return null;
  }

  return (
    <div>
      <SectionContainer className="!pt-1 sm:!pt-5 lg:!py-0">
        <div className="flex flex-col sm:flex-row items-left sm:justify-between py-4 gap-2">
          <Link href={`/#${slug}`} className="flex items-center gap-2 hover:text-primary">
            <ArrowLeft className="ml-4" size={24} /><p>Back to homepage</p>
          </Link>
          <div className={cn("flex gap-5 w-full", projectIndex === 0 ? "justify-end" : "justify-between")}>
            {previousProjectSlug && (
              <Link
                href={`/projects/${previousProjectSlug}`}
                className="flex items-center gap-2 hover:text-primary">
                <ChevronsLeft size={24} /><p>Previous Project</p>
              </Link>)
            }
            {nexProjectSlug && (
              <Link
                href={`/projects/${nexProjectSlug}`}
                className="flex items-center gap-2 hover:text-primary">
                <p>Next Project</p><ChevronsRight size={24} />
              </Link>
            )}
          </div>
        </div>
        <ProjectHeader project={project} />
      </SectionContainer >
    </div >
  );
}