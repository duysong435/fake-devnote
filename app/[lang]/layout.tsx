import React from "react";
import { clsx } from "clsx";
// import { MagicMotion } from "react-magic-motion";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import { getDictionary } from "@/dictionaries/get-dictionary";
import { i18n } from "@/dictionaries/i18n-config";
import ThemeProvider from "@/providers/theme-provider";
import { LocaleEnum } from "@/types/locales";

import "./globals.scss";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: LocaleEnum };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <Head>
        <meta
          name="google-adsense-account"
          content="ca-pub-8742627001531739"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8742627001531739"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body
        className={clsx(
          inter.variable,
          "flex min-h-[100dvh] flex-col transition duration-300",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header lang={params.lang} dictionary={dictionary} />

            <main className="flex-1">{children}</main>

            <Footer dictionary={dictionary} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
