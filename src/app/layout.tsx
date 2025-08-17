import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {homePath, ticketsPath} from "@/paths";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "The Road Next by ZJT",
  description: "Learn Learn Learn!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.className}
      >
        <nav className="
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between
        ">
          <div>
            <Button asChild variant={"outline"}>
            <Link href={homePath()}>Home</Link>
            </Button>
            
          </div>
          <div>
            <Button asChild variant={"outline"}>
            <Link href={ticketsPath()} >Tickets</Link>
            </Button>
            
          </div>
        </nav>
        <main className="
          min-h-screen flex-1
          overflow-y-auto overflow-x-hidden
          py-24 px-8
          bg-secondary/20
          flex flex-col
        ">
          {children}</main>
        
      </body>
    </html>
  );
}
