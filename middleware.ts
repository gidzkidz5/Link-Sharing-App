import { authMiddleware } from "@clerk/nextjs";
 


export default authMiddleware({
    publicRoutes: ['/api/:path*', '/design-system/:path*'],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

// export default authMiddleware({
//     publicRoutes: ['/api/:path*', '/design-system/:path*'],
// });

// export const config = {
//     matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
