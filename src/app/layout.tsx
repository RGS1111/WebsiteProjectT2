import type { Metadata, Viewport } from "next";
import { metadata as siteMeta } from "@/config/site-config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ea580c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eliteroofingnottingham.co.uk"),
  title: {
    default: siteMeta.default.title,
    template: "%s | Elite Roofing Nottingham",
  },
  description: siteMeta.default.description,
  keywords: siteMeta.default.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: siteMeta.default.openGraph,
  twitter: {
    card: "summary_large_image",
    title: siteMeta.default.title,
    description: siteMeta.default.description,
    images: ["https://www.eliteroofingnottingham.co.uk/images/og-default.jpg"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://www.eliteroofingnottingham.co.uk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Preconnect to Google fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Schema — LocalBusiness on every page for NAP consistency */}
        <LocalBusinessSchema />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
