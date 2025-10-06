import { NextRequest, NextResponse } from "next/server";

const locales = ['en', 'pt']; // Supported locales
const defaultLocale = 'en'; // Default language

function getLocale(_request?: NextRequest) {
  // TODO: add more sophisticated detection here
  return defaultLocale;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to the determined locale if no locale in path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'], // Paths to apply middleware
};
