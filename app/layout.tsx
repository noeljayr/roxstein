import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Roxstein",
  description: "Personalized software and multimedia solutions.",
  keywords: [
    "Roxstein",
    "software solutions",
    "best web Design agency in Switzerland",
    "web development",
    "software developer in Switzerland",
    "web design",
    "UI/UX design",
    "UI design",
    "App developer",
    "Swiss",
    "Switzerland",
    "personal portfolio",
  ],
  authors: [
    {
      name: "Roxstein",
      url: "https://www.roxstein.ch/about",
    },
  ],
  twitter: {
    card: "summary_large_image",
    site: "@roxstein",
    creator: "@roxstein",
    title: "Roxstein",
    description: "Personalized software and multimedia solutions.",
    images: ["https://www.roxstein.ch/twitter-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  creator: "Roxstein",
  publisher: "Roxstein",
  metadataBase: new URL("https://www.roxstein.ch"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
