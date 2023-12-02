import React from "react";

type iButton = {
  title: string;
  onclick?: () => void;
  size: number;
};

const Button: React.FC<iButton> = ({ title, onclick, size }) => {
  return (
    <div
      onClick={onclick}
      style={{
        width: `calc(${size * 2.8}px)`,
        height: `${size}px`,
        backgroundColor: "var(--accent-color)",
        color: "var(--primary-color)",
      }}
      className="rounded-[3px] font-medium flex justify-center items-center cursor-pointer">
      {title}
    </div>
  );
};

export default Button;
