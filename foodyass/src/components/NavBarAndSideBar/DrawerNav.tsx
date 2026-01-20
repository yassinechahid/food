"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import menuClose from "@/public/assets/menuClose.svg";
import homeIcon from "@/public/assets/home.svg";
import onHomeIcon from "@/public/assets/onHome.svg";
import contactIcon from "@/public/assets/sideIcon5.svg";
import onContactIcon from "@/public/assets/sideIcon5.svg";
import logo from "@/public/assets/sideIcon5.svg";

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
      icon: <Image src={homeIcon} alt={t("drawerNav.home")}/>,
      onIcon: <Image src={onHomeIcon} alt={t("drawerNav.home")}/>,
      path: "/",
    },
    {
      title: t("services"),
      icon: <Image src={contactIcon} alt={t("services")}/>,
      onIcon: <Image src={onContactIcon} alt={t("services")}/>,
      path: "/services",
    },
    {
      title: t("projects"),
      icon: <Image src={contactIcon} alt={t("projects")}/>,
      onIcon: <Image src={onContactIcon} alt={t("projects")}/>,
      path: "/projects",
    },
    {
      title: t("about"),
      icon: <Image src={contactIcon} alt={t("about")}/>,
      onIcon: <Image src={onContactIcon} alt={t("about")}/>,
      path: "/about",
    },{
      title: t("contact"),
      icon: <Image src={contactIcon} alt={t("contact")}/>,
      onIcon: <Image src={onContactIcon} alt={t("contact")}/>,
      path: "/contact",
    },
  ];

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={closeDrawerAction}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 h-screen w-[290px] bg-light-surfaceContainerLow dark:bg-dark-surfaceContainerLow z-50 shadow-2xl overflow-hidden flex flex-col transition-transform duration-300 ease-out rounded-r-[12px]"
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-4 border-b border-light-outline dark:border-dark-outline">
          <div className="flex items-center justify-between h-[40px]">
            <button
              onClick={closeDrawerAction}
              className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-light-secondaryContainer dark:hover:bg-dark-secondaryContainer transition duration-200"
              aria-label="Close menu"
            >
              <div className="hover:bg-light-primaryContainer/40 dark:hover:bg-dark-primaryContainer/40 p-2 rounded-md">
                <Image
                  src={menuClose}
                  alt="menu close"
                />
              </div>
              <Link href="/" className="text-label-large font-roboto font-medium">
                <Image
                  src={logo}
                  alt="logo mon toubib"
                />
              </Link>
            </button>
          </div>
        </div>

        {/* Navigation Links - Scrollable area */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-2">
            {NavLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`h-[56px] w-full rounded-full flex items-center gap-3 text-label-large font-roboto font-medium transition-colors ${
                    isRTL ? "pr-[16px]" : "pl-[16px]"
                  } ${
                    pathname === item.path
                      ? "bg-light-secondaryContainer dark:bg-dark-secondaryContainer text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
                      : "text-light-onSurface dark:text-dark-onSurface hover:bg-light-secondaryContainer/50 dark:hover:bg-dark-secondaryContainer/50"
                  }`}
                  onClick={closeDrawerAction}
                >
                  <div className="flex-shrink-0 filter-white">
                    {pathname === item.path ? item.onIcon : item.icon}
                  </div>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer - Fixed at bottom */}
        <div className="flex-shrink-0 p-6 border-t border-light-outline dark:border-dark-outline text-center text-body-medium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant">
          <span className="mx-1">&copy;{new Date().getFullYear()}</span>
          <span className="mx-1">{t("drawerNav.copyright")}</span>
        </div>
      </div>
    </>
  );
};