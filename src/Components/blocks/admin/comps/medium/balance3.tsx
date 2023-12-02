import React from "react";
import { AiFillBank } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { MdOutlineLabelImportant } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";

type iBalance3 = {
  balance: number;
};

const Balance3: React.FC<iBalance3> = ({ balance }) => {
  return (
    <div className="rounded-[5px] border-[1px] overflow-hidden">
      <div className="w-full py-5 flex justify-center border-b-[1px]">
        <div className="w-[90%] flex items-center">
          <div className="w-fit">
            <div className="text-[12px] font-medium">{"FLEX ACCOUNT (8%)"}</div>
            <div className="flex items-center text-3xl text-[var(--accent-color)]">
              <span>
                {" "}
                <FaNairaSign />{" "}
              </span>
              <span>{balance}.00</span>
            </div>
            <div className="text-[14px] font-medium flex items-center gap-3">
              <div>Available Balance:</div>
              <div className="flex items-center text-xl text-[var(--accent-color)]">
                <span>
                  {" "}
                  <FaNairaSign />{" "}
                </span>
                <span>{balance}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-b-[1px]">
        <div className="flex justify-center items-center cursor-pointer py-4">
          <div className="flex gap-3 items-center w-fit">
            <div>
              <MdOutlineLabelImportant className="text-[var(--accent-color)]" />
            </div>
            <small>New Label</small>
          </div>
        </div>
        <div className="flex border-x-[1px] justify-center items-center cursor-pointer py-4">
          <div className="flex gap-3 items-center w-fit">
            <div>
              <AiFillBank className="text-[var(--accent-color)]" />
            </div>
            <small>Withdraw</small>
          </div>
        </div>
        <div className="flex justify-center items-center cursor-pointer py-4">
          <div className="flex gap-3 items-center w-fit">
            <div>
              <RiSettingsFill className="text-[var(--accent-color)]" />
            </div>
            <small>Settings</small>
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 gap-6">
        <div className="p-2 rouded-[4px] border-[1px]">
          <div className="text-[11px] opacity-[.6]">Interest P.A</div>
          <div className="flex items-center">
            <div className="bg-transparent w-20 border-none outline-none focus:outline-none">
              8%
            </div>
          </div>
        </div>
        <div className="p-2 rouded-[4px] border-[1px]">
          <div className="text-[11px] opacity-[.6]">Withdrawals</div>
          <div className="flex items-center">
            <div>
              <span className="font-medium">0</span> this month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance3;
