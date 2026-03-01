"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import menuNormal from "@/public/assets/menuNormal.svg";

import LanguageMenu from "./LanguageMenu";
import { DrawerNav } from "./DrawerNav";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

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
    <div className="flex fixed z-50 justify-between items-center h-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 bg-light-surface dark:bg-dark-surface shadow-md border-b border-light-outlineVariant dark:border-dark-outlineVariant backdrop-blur-sm">
      {/* Homepage link */}
      <Link
        href="/"
        className="text-label-large font-roboto font-medium hover:opacity-80 transition-opacity">
        <Logo size={45} />
      </Link>

      {/* Desktop navbar */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center justify-center gap-1">
          {navLinks.map((link) => (
            <Link
              className={`py-2.5 px-4 rounded-full text-label-large font-semibold transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer shadow-sm"
                  : "text-light-onSurface dark:text-dark-onSurface hover:bg-light-surfaceContainerHighest dark:hover:bg-dark-surfaceContainerHighest hover:text-light-primary dark:hover:text-dark-primary"
              }`}
              href={link.path}
              key={link.title}>
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
            className="p-2.5 hover:bg-light-secondaryContainer dark:hover:bg-dark-secondaryContainer rounded-full transition-colors duration-200"
            aria-label={t("drawerNav.closeMenu")}>
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
