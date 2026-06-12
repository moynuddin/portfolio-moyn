import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/animations/CursorFollower";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://moynuddin.dev'),
  title: "Moyn Uddin | Senior Frontend Engineer & AI Enthusiast",
  description: "Senior Frontend Engineer specializing in high-performance React architecture, secure fintech modules (UOB Singapore, Maybank), and state-of-the-art AI/RAG solutions using LangChain.js.",
  keywords: [
    "Senior Frontend Developer",
    "React Expert",
    "TypeScript Developer",
    "AI Engineer",
    "LangChain.js Developer",
    "RAG systems",
    "Fintech developer Malaysia",
    "Next.js portfolio"
  ],
  authors: [{ name: "Moyn Uddin" }],
  openGraph: {
    title: "Moyn Uddin | Senior Frontend Engineer & AI Enthusiast",
    description: "Building premium digital experiences by bridging high-performance React frontend architectures with state-of-the-art AI systems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Moyn Uddin Portrait",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moyn Uddin | Senior Frontend Engineer & AI Enthusiast",
    description: "Building premium digital experiences by bridging React with LangChain.js AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        {/* Inline script to set theme before React mounts to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.className = savedTheme + ' ${inter.variable} ${outfit.variable}';
                  document.documentElement.style.setProperty('--font-heading', 'var(--font-outfit)');
                  document.documentElement.style.setProperty('--font-body', 'var(--font-inter)');
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="font-body bg-background text-text-primary antialiased min-h-screen flex flex-col justify-between selection:bg-accent/30 selection:text-text-primary">
        
        {/* Cursor Follower (Visible only on pointer-devices, hidden on mobile) */}
        <CursorFollower />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Core Main Content Body */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer info panel */}
        <Footer />
      </body>
    </html>
  );
}
