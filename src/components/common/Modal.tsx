"use client";

import clsx from "clsx";
import React from "react";

interface Props {
  onClose: VoidFunction;
  isOpen: boolean;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl" | "sm";
}

const Modal = ({ children, isOpen, onClose, size = "md" }: Props) => {
  return (
    isOpen && (
      <div
        tabIndex={-1}
        className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
      >
        <div
          className={clsx("relative p-4 w-full h-full md:h-auto", {
            "max-w-md": size === "sm",
            "max-w-xl": size === "md",
            "max-w-4xl": size === "lg",
            "max-w-6xl": size === "xl",
          })}
        >
          <div
            className="relative bg-white rounded-lg shadow"
            onClick={onClose}
          >
            <div className="p-5">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
