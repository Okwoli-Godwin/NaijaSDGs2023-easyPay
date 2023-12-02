import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type iSavingsCardd = {
  savingsType: string;
  icon: any;
  description: string;
  balance: number;
  color: string;
};

const SavingsCard: React.FC<iSavingsCardd> = ({
  savingsType,
  icon,
  description,
  balance,
  color,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("detail")}
      className={`rounded-[10px] bg-[#f0e7eea8] flex flex-col gap-3 rounded-bl-[5px] p-5 bg-opacity-[.5] cursor-pointer`}>
      <div className="text-xl" style={{ color: color }}>
        {" "}
        {icon}{" "}
      </div>
      <div className="text-xl" style={{ color: color }}>
        {" "}
        {savingsType}{" "}
      </div>
      <div className="text-[12px] text-slate-500"> {description} </div>
      <div style={{ color: color }} className="flex items-center">
        <FaNairaSign />
        <span> {`${balance}.00`} </span>
      </div>
    </div>
  );
};

export default SavingsCard;
