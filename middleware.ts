import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && path === "/account") {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  if (( !(session?.role === 'WEBMASTER') && path.startsWith('/controlpanel') )) {
    return NextResponse.redirect(new URL(("/"), req.url));
  }

  if (( session?.role === 'ADMIN' && path.startsWith('/controlpanel') )) {
    return NextResponse.redirect(new URL(("/"), req.url));
  }

  if (( session?.role === 'USER' && path.startsWith('/controlpanel') )) {
    return NextResponse.redirect(new URL(("/"), req.url));
  }

  if ((!session) && path.startsWith('/controlpanel')) {
    return NextResponse.redirect(new URL(("/"), req.url));
  }

  return NextResponse.next();
}