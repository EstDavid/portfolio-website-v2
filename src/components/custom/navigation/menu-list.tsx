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
            <NavigationMenuLink asChild className="px-0 md:px-2 hover:bg-transparent hover:text-primary" >
              <Link href={item.href} className="text-primary dark:text-primary-light hover:bg-none hover:underline hover:underline-offset-8 hover:decoration-4" >
                <span className="text-regular font-mediumweight">{item.title}</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
      <div className="ml-4">
        {children}
      </div>
    </NavigationMenuList>
  );
}