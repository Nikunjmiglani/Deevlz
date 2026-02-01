import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://devllz.in"),

  title: {
    default: "DevLLz | Web Development, SEO & Social Media Agency in Delhi",
    template: "%s | DevLLz",
  },

  description:
    "DevLLz is a digital growth agency in Delhi offering web development, SEO, and social media marketing services for startups and growing businesses.",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon-v3.ico",
  },

  openGraph: {
    type: "website",
    url: "https://devllz.in",
    locale: "en_IN",
    title: "DevLLz | Web Development, SEO & Social Media Agency",
    description:
      "Web development, SEO, and social media services in Delhi built for startups that want real growth — not vanity metrics.",
    siteName: "DevLLz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevLLz Digital Growth Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DevLLz | Digital Growth Agency",
    description:
      "Web development, SEO, and social media services for startups and businesses in Delhi.",
    images: ["/og-image.png"],
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
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DevLLz",
              url: "https://devllz.in",
              logo: "https://devllz.in/favicon-v3.ico",
              description:
                "DevLLz is a digital growth agency in Delhi offering web development, SEO, and social media marketing services.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "deevlz.info@gmail.com",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        />

        <Background />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
