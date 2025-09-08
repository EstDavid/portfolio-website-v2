import { NavigationMenu } from "@/components/ui/navigation-menu";
import LogoBadge from "./logo-badge";
import MenuList from "./menu-list";
import Link from "next/link";
import { footerLinks, footerCopyright } from "@/lib/data/footer";
import { cn } from "@/lib/utils";

const flagTermsAndConditions = process.env.NEXT_PUBLIC_FLAG_TERMS_AND_CONDITIONS === 'TRUE';

export default function Footer () {
  return (
    <footer className="w-full bg-background border-t border-gray-200 mt-12 px-global-padding-x-mobile lg:px-global-padding-x-desktop">
      <div className="max-w-section-max-width mx-auto py-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Navigation */}
          <NavigationMenu className="flex flex-col gap-2 items-start">
            <LogoBadge />
            <MenuList />
          </NavigationMenu>
        </div>
        {/* Divider */}
        <hr className="border-gray-200" />
        {/* Bottom section: Policies and Copyright */}
        <div className={cn(
          "flex flex-col md:flex-row md:items-center gap-4 text-sm",
          flagTermsAndConditions ? "md:justify-between" : "md:justify-end"
        )}>
          {flagTermsAndConditions &&
            <div className="flex flex-wrap gap-6">
              {footerLinks.map(link => (
                <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          }
          <div className="text-center md:text-right">
            {footerCopyright}
          </div>
        </div>
      </div>
    </footer>
  );
}