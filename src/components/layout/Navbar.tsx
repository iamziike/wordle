import React from "react";
import Logo from "../common/Logo";
import WordleIcon from "../common/WordleIcon";
import RulesModal from "../common/RulesModal";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 shadow-sm px-5">
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
        <div className="flex items-center">
          <i className="fa-solid fa-chart-simple cursor-pointer" />
        </div>
        <RulesModal />
        <div className="flex items-center">
          <i className="fa-solid fa-share-nodes cursor-pointer" />
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-gear cursor-pointer" />
        </div>
        <div className="flex items-center">
          {/* modal for me the owner who created this project */}
          {/* The modal will show a link about me and my portfolio, stackoverflow, linkedin etc */}
          {/* iamziike.vercel */}
          <i className="fa-solid fa-ghost cursor-pointer cursor-pointer"></i>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-power-off cursor-pointer"></i>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-user cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
