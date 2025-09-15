import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Inter } from "next/font/google";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reflect",
  description: "Journal Your Thoughts",
  icons: {
    icon: [{ url: "/Logo-Book.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Background */}
          <div className="bg-[url('/bg1.png')] opacity-50 fixed -z-10 inset-0" />

          <Header />
          <main className="min-h-screen">{children}</main>

          {/* Transparent Footer */}
          <footer className="bg-transparent py-12">
            <div className="mx-auto px-4 text-center text-gray-900">
              <p className="backdrop-blur-sm bg-white/20 inline-block px-3 py-1 rounded-lg">
                Made by Kavya Barodia
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
