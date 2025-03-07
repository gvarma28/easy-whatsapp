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

export const metadata: Metadata = {
  title: "Easy WhatsApp | Send Messages Without Saving Contacts",
  description: "Easy WhatsApp lets you quickly send WhatsApp messages without saving contacts. Create custom message links with your name for easy sharing.",
  keywords: [
    "Easy WhatsApp",
    "WhatsApp sender",
    "WhatsApp web tool",
    "Send WhatsApp message",
    "WhatsApp without saving contact",
    "WhatsApp link generator",
    "Custom WhatsApp message"
  ],
  authors: [
    {
      name: "Gourav Varma",
      url: "https://github.com/gvarma28/"
    }
  ],
  openGraph: {
    title: "Easy WhatsApp | No-Contact Message Tool",
    description: "Easy WhatsApp helps you send messages instantly without saving contacts. Create personalized message links.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy WhatsApp Tool",
    description: "The easiest way to send WhatsApp messages without saving contacts",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
