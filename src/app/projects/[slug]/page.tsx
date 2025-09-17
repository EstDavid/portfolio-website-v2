import SectionContainer from "@/components/custom/layout/section-container";
import { projects, projectsSectionText } from "@/lib/data/projects";
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
        <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 py-4 gap-2">
          <Link href={`/#${slug}`} className="col-start-1 flex items-center gap-2 hover:text-primary">
            <ArrowLeft size={24} /><p>{projectsSectionText.backToHomepage}</p>
          </Link>
          <div className={cn("flex col-start-1 sm:col-start-2 col-span-1 sm:col-span-2 row-start-2 sm:row-start-1", projectIndex === 0 ? "justify-end" : "justify-between")}>
            {previousProjectSlug && (
              <Link
                href={`/projects/${previousProjectSlug}`}
                className="flex items-center gap-2 hover:text-primary">
                <ChevronsLeft size={24} /><p>{projectsSectionText.previousProject}</p>
              </Link>)
            }
            {nexProjectSlug && (
              <Link
                href={`/projects/${nexProjectSlug}`}
                className="flex items-center gap-2 hover:text-primary">
                <p>{projectsSectionText.nextProject}</p><ChevronsRight size={24} />
              </Link>
            )}
          </div>
        </div>
        <ProjectHeader project={project} />
      </SectionContainer >
    </div >
  );
}