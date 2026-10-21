import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Zap } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 h-16 border-b border-white/6 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-9xl items-center justify-between px-4 sm:px-6">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Forge Logo"
            width={100}
            height={100}
            className="h-9 w-auto rounded-md"
          />
        </Link>

        <div className="flex items-center gap-5">
          <Show when="signed-in">
            <Link
              href={"/projects"}
              className="text-[18px] font-medium text-white/40 transition-colors hover:text-white/80"
            >
              Projects
            </Link>

            <span className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-white/70">
              <Zap className="h-3 w-3 fill-white/70" />
              3/40 Credits
            </span>

            <UserButton />
          </Show>

          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm"
                className="text-[13px] font-medium text-white/50 hover:text-white/90 hover:bg-transparent"
              >
                Sign in
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button
                size="sm"
                className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-4 text-[13px] font-semibold text-black hover:bg-white/90 active:scale-95"
              >
                Get Started
                <ArrowRight className="h-3 w-3 opacity-60" />
              </Button>
            </SignInButton>
          </Show>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
