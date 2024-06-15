import Link from "next/link";
import React from "react";
import { Monoton } from "next/font/google";

const inter = Monoton({ subsets: ["latin"], weight: ["400"] });

const Logo = () => {
  return (
    <Link href="/" className={`${inter.className} select-none text-xl`}>
      IAMZIIKE
    </Link>
  );
};

export default Logo;
