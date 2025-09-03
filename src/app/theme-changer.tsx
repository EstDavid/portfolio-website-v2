'use client';

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeChanger () {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        type="button"
        variant='ghost'
        onClick={() => {
          if (theme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </Button>
    </div>
  );

}