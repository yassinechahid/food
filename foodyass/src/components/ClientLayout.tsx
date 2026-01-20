"use client";

import { useEffect, useState } from "react";

import i18n from "@/utils/i18n";
import LoadingSpinner from "@/components/Loading";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/NavBarAndSideBar/Navbar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const lang =
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("i18next="))
        ?.split("=")[1] || "fr";
    i18n.changeLanguage(lang).then(() => {
      setIsInitialized(true);
    });
  }, []);

  if (!isInitialized) {
    return (
      <div className="bg-light-background dark:bg-dark-background flex items-center justify-center text-light-onBackground dark:text-dark-onBackground min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}