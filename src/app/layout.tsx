import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "@/styles/globals.css";
import clsx from "clsx";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: "Match.AI",
  description: "A platform for AI-powered matchmaking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("bg-white dark:bg-black text-zinc-900 dark:text-zinc-100", raleway.className)}>
        {children}
      </body>
    </html>
  );
}
