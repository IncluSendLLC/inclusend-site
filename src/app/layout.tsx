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
