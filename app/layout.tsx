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
  title: "DevMovers | AI-Driven Product Engineering",
  description:
    "High-performance engineering and architectural software design for the AI era. We design & build products with AI-driven velocity — from MVP to production in 21 days.",
  keywords: [
    "AI engineering",
    "product engineering",
    "software architecture",
    "AI integration",
    "startup MVP",
    "DevMovers",
    "cloud infrastructure",
    "LLM agents",
  ],
  authors: [{ name: "DevMovers" }],
  creator: "DevMovers",
  publisher: "DevMovers",
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
    title: "DevMovers | AI-Driven Product Engineering",
    description:
      "High-performance engineering and architectural software design for the AI era.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevMovers | AI-Driven Product Engineering",
    description:
      "High-performance engineering and architectural software design for the AI era.",
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
