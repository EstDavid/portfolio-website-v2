import Hero from "@/components/custom/sections/hero";

export default function Home ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans bg-background">
      <main className="flex flex-col items-center">
        <Hero />
        {children}
      </main>
    </div>
  );
}
