import Contact from "@/components/custom/sections/contact";
import Hero from "@/components/custom/sections/hero";
import Projects from "@/components/custom/sections/projects";
import Services from "@/components/custom/sections/services";
import Technologies from "@/components/custom/sections/technologies";

export default function Home () {
  return (
    <div className="font-sans bg-background">
      <main className="flex flex-col items-center">
        <Hero />
        <Projects />
        <Services />
        <Technologies />
        <Contact />
      </main>
    </div>
  );
}
