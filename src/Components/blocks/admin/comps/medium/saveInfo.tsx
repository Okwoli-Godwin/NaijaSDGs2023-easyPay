import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import { HiPower } from "react-icons/hi2";

const SaveInfo: React.FC = () => {
  return (
    <div className="rounded-[5px] border-[1px]">
      <div className="w-full p-4  flex flex-col gap-2 border-b-[1px]">
        <div className="text-[11px]">SAVINGS INFO</div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="p-2 rouded-[4px] border-[1px]">
            <div className="text-[11px] opacity-[.6]">AutoSave Deposit</div>
            <div className="flex items-center">
              <div className="">
                <FaNairaSign className="text-xs" />
              </div>
              <input
                defaultValue={0}
                type="number"
                className="bg-transparent w-20 border-none outline-none focus:outline-none"
              />
            </div>
          </div>
          <div className="p-2 rouded-[4px] border-[1px] flex flex-col justify-between">
            <div className="text-[11px] opacity-[.6]">Next Withdrawal</div>
            <div className="flex items-center">
              <input
                defaultValue="31st December 2023"
                type="text"
                className="bg-transparent text-[9px] w-20 border-none outline-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <div className="flex items-center gap-4">
          <div>
            <HiPower />
          </div>
          <div className="text-[14px]">Turn On AutoSave</div>
        </div>
      </div>
    </div>
  );
};

export default SaveInfo;
