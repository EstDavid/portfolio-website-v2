import { NavigationMenu } from "@/components/ui/navigation-menu";
import LogoBadge from "./logo-badge";
import MenuList from "./menu-list";
import Link from "next/link";
import { footerLinks, footerCopyright } from "@/lib/data/footer";

export default function Footer () {
  return (
    <footer className="w-full bg-background border-t border-gray-200 mt-12 px-global-padding-x-mobile lg:px-global-padding-x-desktop">
      <div className="max-w-section-max-width mx-auto py-10 flex flex-col gap-8">
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
            {footerLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="text-center md:text-right">
            {footerCopyright}
          </div>
        </div>
      </div>
    </footer>
  );
}