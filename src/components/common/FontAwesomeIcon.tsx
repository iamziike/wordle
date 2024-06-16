import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className: string;
}

const FontAwesomeIcon = ({ className, ...props }: Props) => {
  return <i {...props} className={className + " cursor-pointer"} />;
};

export default FontAwesomeIcon;
