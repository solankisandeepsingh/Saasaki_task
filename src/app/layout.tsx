/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Task App",
  description: "Tasks completed by Sandeep"
  };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
        
        )}
      >        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
