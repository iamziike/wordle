import Scripts from "@/components/scripts/Scripts";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../../public/styles/globals.css";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wordle",
  description: "Play Wordle!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Scripts />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

