import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "@/styles/globals.css";

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
      <body
        className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
