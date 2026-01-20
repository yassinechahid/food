"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import logo from "@/public/assets/img1.jpg";
import menuNormal from "@/public/assets/menuNormal.svg";

import LanguageMenu from "./LanguageMenu";
import { DrawerNav } from "./DrawerNav";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Events", path: "/events" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex fixed lg:px-40 z-50 justify-between items-center h-24 w-full p-6 bg-light-background dark:bg-dark-background">
      {/* Homepage link */}
      <Link href="/" className="text-label-large font-roboto font-medium">
        <Image src={logo} alt="yassine" className="w-10 h-10 rounded-full" />
      </Link>

      {/* Desktop navbar */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center justify-center">
          {navLinks.map((link) => (
            <Link
              className={`py-2 px-2.5 rounded-full text-label-large font-semibold transition-colors ${
                isActive(link.path)
                  ? "text-light-primary dark:text-dark-primary hover:text-light-primary dark:hover:text-dark-primary"
                  : "text-light-onSurface dark:text-dark-onSurface hover:text-light-primary dark:hover:text-dark-primary"
              }`}
              href={link.path}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Menu, theme toggle and language */}
      <div className="flex justify-center items-center gap-4">
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Mobile menu button */}
        <div className="lg:hidden flex">
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-light-primaryContainer/40 dark:hover:bg-dark-primaryContainer/40 rounded-md"
            aria-label={t("drawerNav.closeMenu")}
          >
            <Image
              src={menuNormal}
              className="filter-white"
              alt={t("drawerNav.closeMenu")}
              width={24}
              height={24}
            />
          </button>
        </div>
        {/* Language menu */}
        <LanguageMenu changeLanguage={changeLanguage} />
      </div>

      {/* Drawer component */}
      <DrawerNav open={drawerOpen} closeDrawerAction={closeDrawer} />
    </div>
  );
};

export default Navbar;
