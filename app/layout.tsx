import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import { LanguageProvider } from "../contexts/LanguageContext";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "A showcase of my work and skills as a frontend developer",
  keywords: [
    "Servanin Tony",
    "frontend developer",
    "portfolio",
    "React developer",
    "Lyon",
    "France",
    "JavaScript",
    "Typescript",
    "React",
    "HTML",
    "CSS",
    "SASS",
    "Tailwind CSS",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.className} scroll-pt-20`}>
      <LanguageProvider>
        <head></head>
        <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-20">
            {children}
          </main>
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}
