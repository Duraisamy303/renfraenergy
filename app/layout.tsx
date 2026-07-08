import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";

export const metadata: Metadata = {
  title: "Renfra Energy",
  description:
    "As a fast-growing turkey solution provider for clean energy in the region, Renfra Energy takes pride in the fact that the company has been acting as a catalyst in the renewable energy landscape by bringing positive changes that creates a greener and a sustainable future! Renfra Energy is a green-field project developer and provides end-to-end solutions for wind, solar and energy storage that are critical to meet the power demands of industrial, commercial and residential.",
  keywords:
    "Renfra Energy in India,Wind Energy,Solar Power Plants,Battery Energy Storage Systems,Hybrid Renewable Solutions,Commercial & Industrial,Operations & Maintenance",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <FloatingMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
