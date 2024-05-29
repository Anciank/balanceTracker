import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import { Providers } from "./providers";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Track your finance situation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TopBar />
          {children}
          </Providers>
      </body>
    </html>
  );
}
