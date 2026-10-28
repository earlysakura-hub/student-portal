/*
File: layout.tsx
Author: Lin Shi
Date: October 27, 2026

This file defines the root layout of the application.
It receives the page content through the children prop.
It places the Navbar above the page content.
It places the Footer below the page content.
The layout provides a consistent structure for the application.
*/

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Define website metadata
export const metadata: Metadata = {
  title: "New Generation High School",
  description: "Student management portal",
};

// Define the root layout
interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
        {/* Display the navigation bar */}
        <Navbar />

        {/* Display the page content */}
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
          {children}
        </main>

        {/* Display the footer */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
