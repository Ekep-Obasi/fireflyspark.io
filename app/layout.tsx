import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: "Firefly Spark",
  description: "Where spontaneity, culture, and good vibes come together.",
  icons: {
    icon: "/firefly-logo.ico",
  },
  openGraph: {
    title: "Firefly Spark",
    description: "Where spontaneity, culture, and good vibes come together.",
    url: "https://fireflyspark.io",
    siteName: "Firefly Spark",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Firefly Spark App",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firefly Spark",
    description: "Where spontaneity, culture, and good vibes come together.",
    images: ["/og-image.png"],
  },
};

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Variable.ttf', 
      weight: '200 700', 
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash',
})

const poppins = Poppins({
  subsets: ['latin'],        
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${poppins.variable}`}>
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        {children}
        <Footer />
      </body>
    </html>
  );
}
