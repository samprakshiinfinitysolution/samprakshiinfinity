import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import SmoothCursor from "@/components/SmoothCursor";
import Footer from "@/components/footer/Footer";
import Seo from '@/components/Seo';
// import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Samprakshi Infinity Solution',
  description: 'Omnichannel e-commerce, D2C and quick-commerce services for Indian brands and sellers.',
  openGraph: {
    title: 'Samprakshi Infinity Solution',
    description: 'Omnichannel e-commerce, D2C and quick-commerce services for Indian brands and sellers.',
    url: 'https://samprakshiinfinitysolution.com',
    siteName: 'Samprakshi Infinity Solution',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Seo />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
         <SmoothScroll />
         {/* <SmoothCursor /> */}
         {children}
         <Footer />
      </body>
    </html>
  );
}