import { data } from "@/utils/data";
import type { Metadata } from "next";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: `${data.nameFull} | Full Stack Developer`,
  description: "A passionate Full Stack Developer crafting beautiful, responsive, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${poppins.variable} ${dancingScript.variable} antialiased w-full flex flex-col min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden`}
      >
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
