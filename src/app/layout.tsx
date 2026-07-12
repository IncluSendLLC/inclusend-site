import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inclusend.com"),
  title: "IncluSend LLC",
  description:
    "IncluSend LLC is an independent educational technology company and the maker of Melaa, an AI-powered tool that turns WIDA ACCESS scores into classroom-ready guidance for educators of multilingual learners.",
  keywords: [
    "IncluSend",
    "Melaa",
    "educational technology",
    "multilingual learners",
    "WIDA",
    "accessibility",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "IncluSend LLC",
    description:
      "IncluSend LLC is an independent educational technology company and the maker of Melaa, turning WIDA ACCESS scores into classroom-ready guidance for educators of multilingual learners.",
    url: "https://www.inclusend.com",
    siteName: "IncluSend LLC",
    locale: "en_US",
    type: "website",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "IncluSend - software that helps educators reach every learner" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IncluSend LLC",
    description:
      "Independent educational technology company and maker of Melaa - WIDA ACCESS scores into classroom-ready guidance.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
