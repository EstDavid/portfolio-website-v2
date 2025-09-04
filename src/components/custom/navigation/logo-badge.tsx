import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LogoBadge () {
  return (
    <Button
      variant="secondary"
      className="rounded-full border-none w-10 h-10 md:w-fit md:h-auto bg-primary text-white px-4 py-1 font-semibold text-lg shadow-none hover:bg-primary-dark focus:ring-0 focus:outline-none"
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