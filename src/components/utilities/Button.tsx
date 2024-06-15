import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  overrideClassName?: boolean;
}

const Button = ({ className, overrideClassName, ...props }: Props) => {
  return (
    <button
      {...props}
      className={
        overrideClassName
          ? className
          : className + " bg-gray-800 text-white w-max px-5 py-2 rounded-md"
      }
    >
      Button
    </button>
  );
};

export default Button;
