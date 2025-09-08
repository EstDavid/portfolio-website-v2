import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LogoBadge () {
  return (
    <Button
      variant="secondary"
      className="border-none w-10 h-10 md:w-fit md:h-auto text-3xl font-sans font-bold tracking-tight text-primary px-4 py-1 shadow-none focus:ring-0 focus:outline-none hover:bg-transparent dark:hover:bg-transparent dark:text-primary hover:tracking-wider"
      asChild
    >
      <Link href="/">
        <p className="hidden md:flex">
          David de Esteban
        </p>
        <p className="md:hidden">
          DE
        </p>
      </Link>
    </Button>
  );
}