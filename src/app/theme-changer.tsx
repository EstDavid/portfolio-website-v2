'use client';

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeChanger () {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div></div>;
  }

  return (
    <div>
      <Button
        type="button"
        variant='outline'
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