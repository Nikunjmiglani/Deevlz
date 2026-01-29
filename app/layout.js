import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeevLz - Most comprehensive agency",
  description: "Best",
   icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          bg-white text-black
          dark:bg-black dark:text-white
        `}
      >
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
