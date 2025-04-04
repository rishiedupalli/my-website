// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import { Providers } from "./providers";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Rishi\'s Website";
const description =
  "Rishi Edupalli's Personal Website";

export const metadata: Metadata = {
  title,
  description
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
        <Toaster />
        <AuthStatus />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
