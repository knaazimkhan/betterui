import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Better UI - Modern UI Component Library",
    template: "%s | Better UI",
  },
  description: "A modern, customizable UI component library built with Next.js and Tailwind CSS.",
  keywords: ["UI library", "React components", "Tailwind CSS", "Next.js", "TypeScript"],
  authors: [{ name: "Better UI Team" }],
  creator: "Better UI Team",
  metadataBase: new URL("https://betterui.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://betterui.dev",
    title: "Better UI - Modern UI Component Library",
    description: "A modern, customizable UI component library built with Next.js and Tailwind CSS.",
    siteName: "Better UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better UI - Modern UI Component Library",
    description: "A modern, customizable UI component library built with Next.js and Tailwind CSS.",
    creator: "@betterui",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function Footer() {
  return (
    <footer className="border-t border-secondary-200 bg-white py-8 dark:border-secondary-800 dark:bg-secondary-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary-600 dark:text-primary-400"
            >
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
            <span className="font-bold">BetterUI</span>
          </div>
          <div className="text-sm text-secondary-600 dark:text-secondary-400">
            © {new Date().getFullYear()} BetterUI. All rights reserved.
          </div>
          <div className="text-sm text-secondary-600 dark:text-secondary-400">
            Developed and maintained by{' '}
            <a
              href="https://github.com/knaazimkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              @knaazimkhan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
