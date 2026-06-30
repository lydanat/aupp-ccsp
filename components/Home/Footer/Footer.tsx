"use client";

import React from "react";
import Image from "next/image";
import { footerLinks as links, socialLink } from "@/constant/constant";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const auppLogo =
    currentTheme === "dark"
      ? "/images/logo/AUPP-logo.png"
      : "/images/logo/AUPP-Main-Logo.png";

  const ccspLogo =
    currentTheme === "dark"
      ? "/images/logo/main-logo.png"
      : "/images/logo/light.png";
  return (
    <footer className="background text-gray-300 py-16 border">
      {/* Updated grid layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Support Logos */}
        <div className="flex flex-col items-start space-y-">
          <h3 className="text-lg font-semibold text-[#002147] dark:text-white">Support Partners</h3>
          <div className="flex gap-4 items-center">
            <Image
              src={auppLogo}
              alt="AUPP Logo"
              width={185}
              height={135}
              style={{ width: "auto", height: "auto" }}
              className="mt-8"
            />
          </div>
        </div>

        {/* Main Logo + About */}
        <div className="flex flex-col items-start space-y-2">
          <h3 className="text-lg font-semibold text-[#002147] dark:text-white">Created by</h3>
          <Image
            src={ccspLogo}
            alt="CCSP Logo"
            width={130}
            height={80}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-[#002147] dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-start md:text-left">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/${link.url}`}
                  className="text-foreground hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media - 4th column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-[#002147] dark:text-white">Follow Us</h3>
          <div className="flex gap-6">
            {socialLink.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.src}
                  alt={social.label}
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center border-t border-white/20 pt-6 text-[#002147]/70 dark:text-white/70 text-xs">
        © {new Date().getFullYear()} Committee for Community Service Program. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;