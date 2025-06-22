import type { Metadata } from "next";
import "@/css/globals.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/jetbrains-mono/800.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    authors: [
      {
        name: "Roxstein",
        url: "https://www.roxstein.ch/about",
      },
    ],
    creator: "Roxstein",
    publisher: "Roxstein",
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: new URL("/", "https://www.roxstein.ch").toString(),
      images: [
        new URL("/opengraph-image.png", "https://www.roxstein.ch").toString(),
      ],
      type: "website",
      locale: locale,
    },
    keywords: messages.meta.keywords,
    twitter: {
      title: messages.meta.title,
      description: messages.meta.description,

      images: [
        new URL("/twitter-image.png", "https://www.roxstein.ch").toString(),
      ],
      card: "summary_large_image",
      site: "@roxstein",
      creator: "@roxstein",
    },
    metadataBase: new URL("https://www.roxstein.ch"),
    viewport: "width=device-width, initial-scale=1",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader color="#4162bf" />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
