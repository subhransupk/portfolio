import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundWebs from "./components/BackgroundWebs";
import AnimatedLines from "./components/AnimatedLines";
import CornerWeb from "./components/CornerWeb";
import FloatingIcons from "./components/FloatingIcons";
import WebEffect from "./components/WebEffect";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

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
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden bg-[#0a0a0a] text-[#ededed]`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <AnimatedLines />
          <BackgroundWebs />
          <CornerWeb />
          <WebEffect />
          <FloatingIcons />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
