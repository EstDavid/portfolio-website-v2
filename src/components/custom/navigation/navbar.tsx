'use client';

import {
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import LogoBadge from "./logo-badge";
import ThemeChanger from "@/app/theme-changer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MenuList from "./menu-list";
import { Fragment, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar () {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={cn(
        "fixed w-full max-w-full h-navbar-height bg-background border-b border-gray-200 dark:border-primary z-50 px-global-padding-x-mobile lg:px-global-padding-x-desktop",
        hasShadow ? 'shadow-md dark:shadow-primary/30' : '')}>
        <NavigationMenu className="h-full !max-w-section-max-width mx-auto flex items-center justify-between px-8 md:px-0 py-4">
          <LogoBadge />
          <div className="hidden md:flex">
            <MenuList>
              <ThemeChanger />
            </MenuList>
          </div>
          <Sheet>
            <SheetTrigger className="cursor-pointer md:hidden">
              <Menu size={32} className='inline w-10 h-10' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <LogoBadge />
                </SheetTitle>
              </SheetHeader>
              <div className="px-4">
                <MenuList>
                  <ThemeChanger />
                </MenuList>
              </div>
            </SheetContent>
          </Sheet>
        </NavigationMenu>
      </div>
      <div className="w-full h-navbar-height"></div>
    </Fragment>
  );
}