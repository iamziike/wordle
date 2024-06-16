import React from "react";
import Navbar from "@/components/layout/Navbar";
import { PageLayout } from "@/models/types";
import SignInModal from "@/components/common/SignInModal";

const Layout = ({ children }: PageLayout) => {
  return (
    <div>
      <SignInModal />
      <Navbar />
      <div className="px-5 pt-4">{children}</div>
    </div>
  );
};

export default Layout;
