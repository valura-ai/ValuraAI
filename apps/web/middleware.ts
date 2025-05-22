import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware();

// Only protect /account, /dashboard, and /api routes, not the landing page or root
export const config = { matcher: ["/account/:path*", "/dashboard/:path*", "/api/:path*", "/account"] };
