import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "Manage your finance",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${inter.className} antialiased `}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
