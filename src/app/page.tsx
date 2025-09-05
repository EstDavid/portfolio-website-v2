import Hero from "@/components/custom/sections/hero";
import Projects from "@/components/custom/sections/projects";
import Services from "@/components/custom/sections/services";

export default function Home () {
  return (
    <div className="font-sans bg-background">
      <main className="flex flex-col items-center">
        <Hero />
        <Projects />
        <Services />
      </main>
    </div>
  );
}
