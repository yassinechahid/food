import type { Metadata } from "next";
import "./globals.css";

import { LocaleLayoutProps } from "@/types/children";
import ClientRoot from "@/components/ClientRoot";

export const metadata: Metadata = {
  title: "Mon Toubib",
  description:
    "Mon Toubib, la solution innovante pour faciliter l'accès aux soins !",
};

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  return (
    <html lang="fr">
      <ClientRoot>{children}</ClientRoot>
    </html>
  );
}
