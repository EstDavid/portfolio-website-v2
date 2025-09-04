import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { menuItems } from "@/lib/data/menu-items";
import Link from "next/link";

export default function MenuList ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <NavigationMenuList className="flex-col md:flex-row items-start md:items-center md:px-0">
      {menuItems.map(item => {
        return (
          <NavigationMenuItem key={item.title} >
            <NavigationMenuLink asChild className="px-0 md:px-2 hover:bg-primary-light" >
              <Link href={item.href} >
                <p className="text-regular font-mediumweight text-primary-dark hover:text-primary-lightest">
                  {item.title}
                </p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
      {children}
    </NavigationMenuList>
  );
}