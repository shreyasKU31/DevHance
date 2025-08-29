// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/app(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Allow CORS preflight requests
  if (req.method === 'OPTIONS') return NextResponse.next();

  // Protect /app routes
  if (isProtectedRoute(req)) await auth.protect();
});

// Run on app, API, and skip Next internals/static assets
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
