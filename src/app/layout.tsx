import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/custom/navigation/navbar";
import Footer from "@/components/custom/navigation/footer";

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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </head>
      <body
        className={`${interMono.variable} ${urbanistSans.variable} h-full w-full overflow-y-auto overflow-x-hidden bg-background antialiased`}
      >
        <ThemeProvider attribute='class'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
