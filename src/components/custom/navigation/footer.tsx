import { NavigationMenu } from "@/components/ui/navigation-menu";
import LogoBadge from "./logo-badge";
import MenuList from "./menu-list";
import Link from "next/link";

export default function Footer () {
  return (
    <footer className="w-full bg-background border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Top section: Logo/Name and Navigation */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo/Name */}
          {/* Navigation */}
          <NavigationMenu className="flex flex-col gap-2 items-start">
            <LogoBadge />
            <MenuList />
          </NavigationMenu>

        </div>
        {/* Divider */}
        <hr className="border-gray-200" />
        {/* Bottom section: Policies and Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <div className="flex flex-wrap gap-6">
            <Link href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="#cookies" className="hover:text-primary transition-colors">Cookie Preferences</Link>
          </div>
          <div className="text-center md:text-right">
            © 2025 David de Esteban. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}