import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import img from "../../../../../assets/complete.jpg";

const SavingsBalance: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-3 max-[800px]:grid-cols-1 gap-5">
      <div className="col-span-2 max-[800px]:col-span-1 border-[1px] rounded-[5px] px-4 py-10">
        <small className="text-slate-500">Total Balance</small>
        <div className="flex items-center text-3xl text-[var(--accent-color)]">
          <span>
            {" "}
            <FaNairaSign />{" "}
          </span>
          <span>0.00</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <small className="text-slate-500 flex-1">COMPLETE YOUR SETUP</small>
        <div className="flex items-center h-[90%] rounded-[5px] overflow-hidden">
          <img src={img} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SavingsBalance;
