import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Image
            src="/logo.png"
            alt="Forge Logo"
            width={120}
            height={36}
            priority
            className="h-9 w-auto rounded-md object-contain"
          />
        </Link>

        {/* Right Side: Navigation, Credits & Toggle Grouped Together */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center">
            <Link
              href="/projects"
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
          </nav>

          {/* Credits Pill (Slightly larger height, text, and icon) */}
          <div
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3.5 text-sm font-medium text-muted-foreground select-none transition-colors hover:bg-muted/60"
            title="Remaining Credits"
          >
            <Zap className="h-4 w-4 fill-amber-500 text-amber-500 shrink-0" />
            <span className="font-semibold text-foreground">3</span>
            <span className="text-muted-foreground/80">/ 40</span>
            <span className="hidden sm:inline text-muted-foreground/80">Credits</span>
          </div>

          {/* Subtle Vertical Separator */}
          <div className="h-5 w-px bg-border/60" aria-hidden="true" />

          {/* Theme Switcher */}
          <div className="flex items-center justify-center [&_button]:h-9 [&_button]:w-9">
            <ThemeToggle />
          </div>
        </div>

      </div>
    </header>
  );
}