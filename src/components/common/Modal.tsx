"use client";

import clsx from "clsx";
import React from "react";

interface Props {
  cardClassName?: string;
  onClose?: VoidFunction;
  isOpen: boolean;
  title?: React.ReactNode | string;
  children: React.ReactNode;
  size?: "md" | "lg" | "xl" | "sm";
}

const Modal = ({
  children,
  isOpen,
  onClose,
  size = "md",
  title,
  cardClassName,
}: Props) => {
  return (
    isOpen && (
      <div
        tabIndex={-1}
        className={
          "bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
        }
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
            className={cardClassName + " relative bg-white shadow rounded-b-lg"}
          >
            <div className="relative w-full bg-black h-1">
              <i
                className="fa-solid fa-x text-sm absolute right-2 top-3 cursor-pointer"
                onClick={onClose}
              />
            </div>

            <div className="p-5 pt-7 px-6">
              <h3 className="text-3xl font-semibold mb-3">{title}</h3>

              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
