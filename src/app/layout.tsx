import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Sholadiran | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Laravel, React.js, and Next.js. Building scalable web applications with a focus on clean architecture and performance.",
  keywords:
    "Full Stack Developer, Laravel, React.js, Next.js, PHP, JavaScript, Web Development",
  openGraph: {
    title: "Michael Sholadiran | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel, React.js, and Next.js. Building scalable web applications with a focus on clean architecture and performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
