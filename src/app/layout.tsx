import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IncluSend | Accessible EdTech Solutions",
  description:
    "IncluSend develops educational technology solutions focused on accessibility and accommodation. AI-driven tools for inclusive education.",
  keywords: [
    "accessibility",
    "EdTech",
    "accommodation",
    "WCAG",
    "AI",
    "inclusive education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
