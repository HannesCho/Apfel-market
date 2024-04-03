import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./config";

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
