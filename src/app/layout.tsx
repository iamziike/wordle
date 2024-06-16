import Scripts from "@/components/scripts/Scripts";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../../public/styles/globals.css";
import SignInModal from "@/components/common/SignInModal";
import Navbar from "@/components/layout/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Sora({ subsets: ["latin"], display: "swap" });

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
      <body className={inter.className}>
        <SignInModal />
        <Navbar />
        <Toaster
          containerStyle={{
            top: "20%",
            left: "50%",
            bottom: "50%",
            right: "50%",
          }}
        />
        <div className="px-5 pt-4">{children}</div>
      </body>
    </html>
  );
}

