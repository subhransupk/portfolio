import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundWebs from "./components/BackgroundWebs";
import AnimatedLines from "./components/AnimatedLines";
import CornerWeb from "./components/CornerWeb";
import FloatingIcons from "./components/FloatingIcons";
import WebEffect from "./components/WebEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subhransu | Portfolio",
  description: "Portfolio website of Subhransu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedLines />
        <BackgroundWebs />
        <CornerWeb />
        <WebEffect />
        <FloatingIcons />
        {children}
      </body>
    </html>
  );
}
