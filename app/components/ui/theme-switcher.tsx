'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-react';

// Shadcn/ui 
import { Button } from "@/components/ui/button";

import { SkeletonToggle } from "./skeletons/skeleton-toggle";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return <SkeletonToggle />;

  return (
    <Button size='icon' variant='ghost' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
