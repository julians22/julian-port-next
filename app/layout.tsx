import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { GoogleTagManager } from "@next/third-parties/google";

import { Providers } from "./providers";
import GoogleAdsense from "./GoogleAdsesnse";

import { siteConfig } from "@/config/site";
import { fontOleoScript, fontUbuntu } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="id">
      {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="GTM-N6SRBJ9L" />
      )}
      <head />
      <body
        className={clsx(
          fontUbuntu.className,
          "tracking-wide",
          fontOleoScript.variable,
        )}
      >
        <GoogleAdsense pId="2740919928600676" />
        <Providers themeProps={{ attribute: "class" }}>
          <div className="relative flex flex-col bg-[#f6f2f2] dark:bg-[#0b0f11] min-h-screen overflow-y-auto scrollbar-hide">
            <main className="flex flex-col mx-auto pt-10 md:pt-16 pb-[25px] max-w-7xl container">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
