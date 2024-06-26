import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { locales } from "@/src/config";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Apple market",
  description: "sell and buy something cool",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
