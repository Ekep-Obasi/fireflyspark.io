import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col overflow-x-hidden"> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
