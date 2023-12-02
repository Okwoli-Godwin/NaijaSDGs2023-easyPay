import React from "react";
import { FaNairaSign } from "react-icons/fa6";

type iKeyfigures = {
  amount: number;
  subject: string;
  icon: any;
  color: string;
};

const Keyfigures: React.FC<iKeyfigures> = ({
  amount,
  subject,
  icon,
  color,
}) => {
  return (
    <div className="flex flex-col h-fit gap-2">
      <div className="text-2xl z-[-1] opacity-[.3]" style={{ color: color }}>
        {" "}
        {icon}{" "}
      </div>
      <div className="flex items-center gap-[2px] font-medium">
        <span>
          <FaNairaSign className="text-2xl" />{" "}
        </span>{" "}
        <div className="text-2xl"> {amount} </div>
      </div>
      <div className="font-normal "> {subject} </div>
    </div>
  );
};

export default Keyfigures;
