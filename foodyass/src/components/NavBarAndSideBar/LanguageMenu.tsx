"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import moroccoFlag from "@/public/assets/morocco.svg";
import ukFlag from "@/public/assets/english.svg";
import franceFlag from "@/public/assets/franceFlag.svg";

interface LanguageMenuProps {
  changeLanguage: (lang: string) => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(franceFlag);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "fr";
    i18n.changeLanguage(storedLang);
    updateFlag(storedLang);
  }, [i18n]);

  const handleLanguageChange = (lang: string) => {
    if (i18n.language === lang) return;

    changeLanguage(lang);
    setIsOpen(false);
    localStorage.setItem("language", lang);
    updateFlag(lang);

    setTimeout(() => {
      window.location.reload();
    }, 10);
  };

  const updateFlag = (lang: string) => {
    switch (lang) {
      case "ar":
        setCurrentFlag(moroccoFlag);
        break;
      case "en":
        setCurrentFlag(ukFlag);
        break;
      case "fr":
        setCurrentFlag(franceFlag);
        break;
      default:
        setCurrentFlag(franceFlag);
    }
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-light-onSurface dark:text-dark-onSurface flex items-center hover:bg-light-primaryContainer/40 dark:hover:bg-dark-primaryContainer/40 gap-2 px-2 py-1 rounded-lg cursor-pointer transition duration-200"
      >
        <Image
          src={currentFlag}
          alt="current language"
          width={24}
          height={24}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 bg-light-background dark:bg-dark-background z-[9999] shadow-lg rounded-md w-48 text-light-primary dark:text-dark-primary text-body-large ${
            i18n.language === "ar" ? "left-0" : "right-0"
          }`}
        >
          <div
            onClick={() => handleLanguageChange("ar")}
            className="flex items-center gap-2 p-2 hover:bg-light-primaryContainer/60 dark:hover:bg-dark-primaryContainer/60 cursor-pointer rounded-md transition duration-200"
          >
            <Image src={moroccoFlag} alt="arabic" width={20} height={20} />
            <span>{t("languages.ar")}</span>
          </div>
          <div
            onClick={() => handleLanguageChange("en")}
            className="flex items-center gap-2 p-2 hover:bg-light-primaryContainer/60 dark:hover:bg-dark-primaryContainer/60 cursor-pointer rounded-md transition duration-200"
          >
            <Image src={ukFlag} alt="uk" width={20} height={20} />
            <span>{t("languages.en")}</span>
          </div>

          <div
            onClick={() => handleLanguageChange("fr")}
            className="flex items-center gap-2 p-2 hover:bg-light-primaryContainer/60 dark:hover:bg-dark-primaryContainer/60 cursor-pointer rounded-md transition duration-200"
          >
            <Image src={franceFlag} alt="French" width={20} height={20} />
            <span>{t("languages.fr")}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;