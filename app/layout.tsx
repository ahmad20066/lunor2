import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Cairo } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";
import { LocaleHtml } from "@/components/LocaleHtml";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lunor — Where Luxury Meets Hair Perfection",
  description: "Premium hair extensions and luxury hair care. Born from passion for flawless hair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body>
        <LocaleProvider>
          <LocaleHtml />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
