import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  overrideClassName?: boolean;
}

const Button = ({
  className,
  overrideClassName,
  children,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={
        overrideClassName
          ? className
          : className +
            " uppercase bg-gray-800 border-2 text-white px-5 py-2 rounded-md active:scale-125 transition duration-200 transform"
      }
    >
      {children}
    </button>
  );
};

export default Button;
