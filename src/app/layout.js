import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPages from "@/components/header/HeaderPages";
import FooterPages from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AutoFix Pro | Professional Car Repair & Maintenance Services",
  description: "Expert car repair, maintenance, and roadside assistance services. Our certified technicians provide quality automotive solutions for all vehicle types.",
  keywords: "car repair, auto maintenance, vehicle servicing, car mechanics, automotive repair, brake service, engine repair, car diagnostics, Egypt car service",
  authors: [{ name: "AutoFix Pro Team" }],
  creator: "AutoFix Pro",
  publisher: "AutoFix Pro Automotive Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_EG",
    url: "https://autofixpro.com",
    title: "AutoFix Pro | Professional Car Repair & Maintenance Services",
    description: "Expert car repair, maintenance, and roadside assistance services. Our certified technicians provide quality automotive solutions.",
    siteName: "AutoFix Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoFix Pro - Professional Car Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFix Pro | Professional Car Repair & Maintenance Services",
    description: "Expert car repair, maintenance, and roadside assistance services.",
    images: ["/images.jpg"],
    creator: "@AutoFixPro",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#EA580C", 
  appleWebApp: {
    capable: true,
    title: "AutoFix Pro",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  category: "automotive",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderPages />
        <div className="site-visual-layer" aria-hidden="true" />
        {children}
        <FooterPages />
      </body>
    </html>
  );
}
