import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Add this line for development
  title: "Abdelaziz Elhadry | Portfolio",
  description: "Professional portfolio showcasing my work and experience",
  keywords: [
    "portfolio",
    "developer",
    "web development",
    "frontend",
    "backend",
    "full stack",
    "next.js",
    "react",
    "react native",
    "node.js",
    "express",
    "mongodb",
    "typescript",
    "javascript",
    "tailwindcss",
  ],
  authors: [{ name: "Abdelaziz Elhadry" }],
  openGraph: {
    title: "Abdelaziz Elhadry | Portfolio",
    description: "Professional portfolio showcasing my work and experience",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Abdelaziz Elhadry Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelaziz Elhadry | Portfolio",
    description: "Professional portfolio showcasing my work and experience",
    images: ["/images/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
