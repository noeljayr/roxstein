import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({
  ...routing,
  defaultLocale: "en",
  localeDetection: true,
});

export function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths EXCEPT:
    // - _next
    // - .ico, .txt, .xml, .riv (add .riv here)
    "/((?!_next|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.riv$).*)",
  ],
};
