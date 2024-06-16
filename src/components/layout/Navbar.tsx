"use client";

import React from "react";
import Logo from "../common/Logo";
import WordleIcon from "../common/WordleIcon";
import RulesModal from "../common/RulesModal";
import FontAwesomeIcon from "../common/FontAwesomeIcon";
import SettingsModal from "../common/SettingsModal";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isLoggedIn = !pathname.includes("/anonymous") ?? false;

  return (
    <div className="flex justify-between items-center py-4 shadow-sm px-5 sticky top-0 left-0 w-screen bg-white">
      <Logo />
      <WordleIcon
        word={[
          { letter: "W", color: "gray" },
          { letter: "O", color: "yellow" },
          { letter: "R", color: "green" },
          { letter: "D", color: "yellow" },
          { letter: "L", color: "gray" },
          { letter: "E", color: "green" },
        ]}
      />
      <div className="flex gap-4 text-xl">
        {/* {!isLoggedIn && (
          <div className="flex items-center">
            <FontAwesomeIcon className="fa-solid fa-right-to-bracket" />
          </div>
        )} */}

        {isLoggedIn && (
          <div className="flex items-center">
            <FontAwesomeIcon className="fa-solid fa-chart-simple" />
          </div>
        )}

        <RulesModal />

        {isLoggedIn && (
          <div className="flex items-center">
            <FontAwesomeIcon className="fa-solid fa-share-nodes" />
          </div>
        )}

        <SettingsModal />

        <div className="flex items-center">
          {/* modal for me the owner who created this project */}
          {/* The modal will show a link about me and my portfolio, stackoverflow, linkedin etc */}
          {/* iamziike.vercel */}
          <FontAwesomeIcon className="fa-solid fa-ghost" />
        </div>

        {isLoggedIn && (
          <div className="flex items-center">
            <FontAwesomeIcon className="fa-solid fa-power-off text-red-900" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
