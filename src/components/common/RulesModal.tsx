"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import WordleIcon from "./WordleIcon";

const RulesModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center" title="How to play">
        <i
          onClick={handleOpenModal}
          className="fa-solid fa-circle-question cursor-pointer"
        />
      </div>

      <Modal
        size="lg"
        title={"How to play"}
        isOpen={isOpen}
        onClose={handleModalClose}
      >
        <main className="text-gray-600">
          <p>
            You need to guess the word within 6 attempts, and the color of the
            letters will change to indicate how close your guess is.
          </p>
          <div className="pt-4">
            <p>To start the game, just enter any word, for example</p>
            <div className="pt-2 pb-4">
              <WordleIcon
                word={[
                  { letter: "O", color: "gray" },
                  { letter: "R", color: "yellow" },
                  { letter: "A", color: "green" },
                  { letter: "N", color: "yellow" },
                  { letter: "G", color: "gray" },
                  { letter: "E", color: "green" },
                ]}
              />
            </div>
            <div className="bg-gray-100 rounded-md p-4">
              <div className="flex gap-2 mb-2 items-end">
                <div className="flex gap-2">
                  <WordleIcon word={[{ letter: "O", color: "gray" }]} />
                  <WordleIcon word={[{ letter: "G", color: "gray" }]} />
                </div>
                <div>{"aren't in the target word at all"}</div>
              </div>

              <div className="flex gap-2 mb-2 items-end">
                <div className="flex gap-2">
                  <WordleIcon word={[{ letter: "R", color: "yellow" }]} />
                  <WordleIcon word={[{ letter: "N", color: "yellow" }]} />
                </div>
                <div>{"are in the word but in the wrong spot"}</div>
              </div>

              <div className="flex gap-2 items-end">
                <div className="flex gap-2">
                  <WordleIcon word={[{ letter: "A", color: "green" }]} />
                  <WordleIcon word={[{ letter: "E", color: "green" }]} />
                </div>
                <div>{"are in the word and the correct spot"}</div>
              </div>
            </div>
          </div>
        </main>
        <footer className="text-center pt-4 text-sm text-gray-500">
          <div>Good Luck 💪</div>
        </footer>
      </Modal>
    </>
  );
};

export default RulesModal;
