import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Strict Transport Security (2 years, preload)
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  // Prevent MIME sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Deny being embedded in iframes
  response.headers.set("X-Frame-Options", "DENY");

  // XSS protection (legacy header, still respected by some browsers)
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Referrer privacy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Restrict browser features
  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()");

  // Content Security Policy (basic safe defaults, allow inline styles for Tailwind)
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *; font-src 'self';"
  );

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|public|api).*)"],
};
