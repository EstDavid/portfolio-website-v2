import { Button } from "@/components/ui/button";
import { LaptopMinimalCheck } from "lucide-react";
import ThemeChanger from "./theme-changer";

export default function Home ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans bg-background">
      <main className="flex flex-col items-center sm:items-start">
        <Button>Test<LaptopMinimalCheck /></Button>
        <Button variant="secondary">Test<LaptopMinimalCheck /></Button>
        <Button variant="link">Test<LaptopMinimalCheck /></Button>
        <ThemeChanger />
        {children}
      </main>
    </div>
  );
}
