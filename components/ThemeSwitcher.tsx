// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      ></Switch>
    </div>
  );
}
