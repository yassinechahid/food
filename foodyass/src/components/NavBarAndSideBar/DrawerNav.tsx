"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Home, UtensilsCrossed, Calendar, Info, Mail } from "lucide-react";

import menuClose from "@/public/assets/menuClose.svg";
import Logo from "@/components/Logo";

interface DrawerNavProps {
  open: boolean;
  closeDrawerAction: () => void;
}

export const DrawerNav: React.FC<DrawerNavProps> = ({
  open,
  closeDrawerAction,
}) => {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        closeDrawerAction();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, closeDrawerAction]);

  const NavLinks = [
    {
      title: t("drawerNav.home"),
      icon: <Home className="w-6 h-6" />,
      onIcon: <Home className="w-6 h-6" />,
      path: "/",
    },
    {
      title: t("services"),
      icon: <UtensilsCrossed className="w-6 h-6" />,
      onIcon: <UtensilsCrossed className="w-6 h-6" />,
      path: "/services",
    },
    {
      title: t("events"),
      icon: <Calendar className="w-6 h-6" />,
      onIcon: <Calendar className="w-6 h-6" />,
      path: "/events",
    },
    {
      title: t("about"),
      icon: <Info className="w-6 h-6" />,
      onIcon: <Info className="w-6 h-6" />,
      path: "/about",
    },
    {
      title: t("contact"),
      icon: <Mail className="w-6 h-6" />,
      onIcon: <Mail className="w-6 h-6" />,
      path: "/contact",
    },
  ];

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 backdrop-blur-sm"
        onClick={closeDrawerAction}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 h-screen w-[290px] bg-light-surface dark:bg-dark-surface z-50 shadow-2xl overflow-hidden flex flex-col transition-transform duration-300 ease-out rounded-r-[16px] border-r border-light-outlineVariant dark:border-dark-outlineVariant"
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex-shrink-0 p-4 border-b border-light-outlineVariant dark:border-dark-outlineVariant bg-light-surfaceContainerLowest dark:bg-dark-surfaceContainerLowest">
          <div className="flex items-center justify-between h-[40px]">
            <button
              onClick={closeDrawerAction}
              className="flex items-center gap-3 p-2 rounded-full cursor-pointer hover:bg-light-secondaryContainer dark:hover:bg-dark-secondaryContainer transition-all duration-200"
              aria-label="Close menu">
              <div className="hover:bg-light-primaryContainer/40 dark:hover:bg-dark-primaryContainer/40 p-2 rounded-full transition-colors">
                <Image src={menuClose} alt="menu close" />
              </div>
            </button>
            <Link
              href="/"
              className="text-label-large font-roboto font-medium hover:opacity-80 transition-opacity">
              <Logo size={40} />
            </Link>
          </div>
        </div>

        {/* Navigation Links - Scrollable area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow">
          <ul className="space-y-2">
            {NavLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`h-[56px] w-full rounded-full flex items-center gap-3 text-label-large font-roboto font-medium transition-all duration-200 ${
                    isRTL ? "pr-[16px]" : "pl-[16px]"
                  } ${
                    pathname === item.path
                      ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer shadow-md"
                      : "text-light-onSurface dark:text-dark-onSurface hover:bg-light-surfaceContainerHighest dark:hover:bg-dark-surfaceContainerHighest hover:shadow-sm"
                  }`}
                  onClick={closeDrawerAction}>
                  <div className="flex-shrink-0">
                    {pathname === item.path ? item.onIcon : item.icon}
                  </div>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="flex-shrink-0 p-6 border-t border-light-outlineVariant dark:border-dark-outlineVariant text-center text-body-medium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant bg-light-surfaceContainerLowest dark:bg-dark-surfaceContainerLowest">
          <span className="mx-1">&copy;{new Date().getFullYear()}</span>
          <span className="mx-1">{t("all rights reserved")}</span>
        </div>
      </div>
    </>
  );
};
