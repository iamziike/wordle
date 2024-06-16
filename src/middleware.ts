import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NAV_PATHS } from "./constants";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname !== NAV_PATHS.anonymous) {
    return NextResponse.redirect(new URL(NAV_PATHS.anonymous, request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
