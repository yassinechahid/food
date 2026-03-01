import type { Metadata } from "next";
import "./globals.css";

import { LocaleLayoutProps } from "@/types/children";
import ClientRoot from "@/components/ClientRoot";

export const metadata: Metadata = {
  title: "food",
  description: "food, la solution innovante pour faciliter l'accès aux soins !",
};

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <html lang="fr" className="overflow-x-hidden">
      <ClientRoot>{children}</ClientRoot>
    </html>
  );
}
