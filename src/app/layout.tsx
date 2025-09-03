import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const interMono = Inter({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Welcome to the Portfolio Website of David de Esteban",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full w-full">
      <head />
      <body
        className={`${interMono.variable} ${urbanistSans.variable} h-full w-full overflow-y-auto overflow-x-hidden bg-background antialiased`}
      >
        <ThemeProvider attribute='class'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
