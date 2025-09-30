import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

const metadata: Metadata = {
  title: "Firefly Spark",
  description: "Where spontaneity, culture, and good vibes come together.",
  icons: {
    icon: "/favicon.ico",              
  },
  openGraph: {
    title: "Firefly Spark",
    description: "Where spontaneity, culture, and good vibes come together.",
    url: "https://fireflyspark.io",
    siteName: "Firefly Spark",
    images: [
      {
        url: "/og-image.png", // your OG image (1200x630 recommended)
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
