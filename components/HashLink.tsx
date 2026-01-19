"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

interface HashLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function HashLink({ href, className, children }: HashLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Get the correct localized IDs
  const projectsT = useTranslations("projectsId");
  const servicesT = useTranslations("servicesId");

  // Check if we're on the home page (any locale)
  const isHomePage =
    pathname === "/en" ||
    pathname === "/de" ||
    pathname === "/" ||
    pathname === "/en/" ||
    pathname === "/de/";

  // Map hash fragments to localized IDs
  const getLocalizedId = (hash: string) => {
    switch (hash) {
      case "#projects":
        return projectsT("text");
      case "#services":
        return servicesT("text");
      default:
        return hash.replace("#", "");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const localizedId = getLocalizedId(href);

    if (isHomePage) {
      // We're on home page, just scroll to the section
      const element = document.getElementById(localizedId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // We're on another page, navigate to home with hash
      // Use window.location to navigate with hash
      window.location.href = `/#${localizedId}`;
    }
  };

  // Handle scrolling after navigation from another page
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const element = document.getElementById(hashId);
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [isHomePage, pathname]);

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
