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
            <NavigationMenuLink asChild className="px-0 md:px-2 hover:bg-transparent hover:text-primary focus:bg-transparent" >
              <Link href={item.href} className="hover:bg-none hover:underline hover:underline-offset-8 hover:decoration-4 focus:text-primary focus:underline focus:underline-offset-8 focus:decoration-4" >
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