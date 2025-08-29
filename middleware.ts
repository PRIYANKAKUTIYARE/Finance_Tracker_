
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher([
//   "/dashboard(.*)",
//   "/settings(.*)",
//   "/profile(.*)",
//   "/account(.*)",
//   "/transactions(.*)",
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) {
//     auth.protect(); // ✅ This is correct
//   }
// });

// export const config = {
//   matcher: [
//     "/((?!_next|.*\\..*).*)", // matches everything except _next and static files
//     "/",
//     "/(api|trpc)(.*)",
//   ],
// };

import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/settings(.*)",
    "/profile(.*)", 
    "/account(.*)",
    // "/api(.*)",
    "/transactions(.*)",
    // "/trpc(.*)"
])
export default clerkMiddleware(async (auth, req) => {
   const { userId } = await  auth();
   if(!userId && isProtectedRoute(req)){
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
   }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};