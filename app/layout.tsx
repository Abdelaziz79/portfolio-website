import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { metadata as mData } from "@/app/_constants/metadata";
import { LanguageProvider } from "@/app/_contexts/LanguageContext";
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import ShimmerBackground from "./_components/ShimmerBackground";
import StorageCleaner from "./_components/StorageCleaner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  ...mData,
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${notoArabic.variable} antialiased min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95 dark:from-background dark:to-background/95`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <StorageCleaner />

            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                  <ShimmerBackground />
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
