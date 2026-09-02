import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Eleviq — Professional Drones for Every Flight Mission",
  description:
    "Find your perfect drone. Professional aerial drones for creators, businesses and professionals — with expert guidance before you buy.",
  keywords: [
    "drones",
    "aerial",
    "professional",
    "creators",
    "real estate",
    "FPV",
  ],
  authors: [
    {
      name: "Eleviq",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eleviq.example.com",
    title: "Eleviq — Professional Drones for Every Flight Mission",
    description:
      "Professional aerial drones for creators, businesses and professionals — with expert guidance before you buy.",
    siteName: "Eleviq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleviq — Professional Drones for Every Flight Mission",
    description:
      "Professional aerial drones for creators, businesses and professionals — with expert guidance before you buy.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
