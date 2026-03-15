import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.mohithgr.com"),
  title: "Mohith G R | Software Engineer",
  description:
    "Software Engineer specializing in React, Next.js, and scalable web applications.",
    icons:{
      icon: "/icon.png",
    },
  openGraph: {
    title: "Mohith G R Portfolio",
    description: "Software Engineer | React | Next.js",
    url: "https://www.mohithgr.com",
    siteName: "Mohith Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Mohith G R Portfolio",
  description: "Software Engineer | React | Next.js",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
