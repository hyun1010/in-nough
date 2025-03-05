import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(function middleware(req) {
  const token = req.nextauth.token;
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/main') && token) {
    return NextResponse.next();
  }
  if (token) return NextResponse.redirect(new URL('/main', req.url));
  else return NextResponse.redirect(new URL('/signin', req.url));
});

export const config = { matcher: ['/main', '/signin', '/signup'] };
