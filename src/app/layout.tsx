import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Developer | Portfolio",
  description: "A premium portfolio showcasing modern UI development, animations, and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
