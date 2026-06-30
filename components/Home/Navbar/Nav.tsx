"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { NavLinks as LINKS } from "@/constant/constant";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const Nav = () => {

  const [navBg, setNavBg] = useState(false);
  const [theme, setTheme] = useState("dark");

useEffect(() => {
  const isDark = document.documentElement.classList.contains("dark");
  setTheme(isDark ? "dark" : "light");

  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const handler = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  
  return (
    <div
      className={`transition-all duration-200 h-[12vh] fixed  w-full z-50 ${
        navBg ? "bg-background/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between h-full container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={
              theme === "dark"
                ? "/images/logo/main-logo.png"
                : "/images/logo/light.png"
            }
            alt="logo"
            width={150}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
        {LINKS.map((link) =>
          link.children ? (
            <DropdownMenu key={link.id}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition">
                  {link.label} <ChevronDown className="w-5 h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.children.map((child) => (
                  <DropdownMenuItem key={child.id} asChild>
                    <Link href={`/${child.url}`}>
                      {child.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={link.id}
              href={link.url ? `/${link.url}` : "/"}
              className="text-base hover:text-[#B22234] text-foreground font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          )
        )}
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <ThemeToggle/>
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Nav;
