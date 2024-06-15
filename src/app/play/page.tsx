import React from "react";
import GameBoard from "@/components/ui/GameBoard";
import GameKeyboard from "@/components/ui/GameKeyboard";
import ChatBoard from "@/components/ui/ChatBoard";

const Page = () => {
  return (
    <div className="mt-10 flex justify-end">
      <div className="flex-1">
        <GameBoard />
      </div>
      <ChatBoard />
    </div>
  );
};

export default Page;
