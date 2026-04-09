import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevMovers | Secure, Scalable & High-Performance Web Development",
  description:
    "DevMovers helps startups and businesses build secure, scalable web and mobile applications. Full-stack development, DevOps, security testing, and startup MVP development. Get a free consultation today.",
  keywords: [
    "web development company",
    "full stack development services",
    "secure web application development",
    "startup MVP development",
    "freelance development team",
    "DevOps services",
    "API development",
    "mobile app development",
    "custom web applications",
    "scalable web apps",
    "DevMovers",
    "backend development",
    "cloud deployment",
    "security testing",
  ],
  authors: [{ name: "DevMovers" }],
  creator: "DevMovers",
  publisher: "DevMovers",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devmovers.com",
    siteName: "DevMovers",
    title: "DevMovers | Secure, Scalable & High-Performance Web Development",
    description:
      "Build secure, scalable web and mobile applications with DevMovers. Full-stack development, DevOps, security testing, and startup MVP development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMovers | Secure, Scalable & High-Performance Web Development",
    description:
      "Build secure, scalable web and mobile applications with DevMovers. Full-stack development, DevOps, and startup MVP development.",
    creator: "@devmovers",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#131313",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
