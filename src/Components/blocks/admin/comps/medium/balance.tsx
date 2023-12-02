import React from "react";
import { FaNairaSign } from "react-icons/fa6";
import Button from "../small/button";
import { FaPercentage } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { RiSettingsFill } from "react-icons/ri";

type iBalance = {
  balance: number;
};

const Balance: React.FC<iBalance> = ({ balance }) => {
  return (
    <div className="rounded-[5px] border-[1px] overflow-hidden">
      <div className="w-full py-10 flex justify-center border-b-[1px]">
        <div className="w-[90%] justify-between flex items-center">
          <div className="w-fit">
            <div className="text-[12px] font-medium">MY BALANCE</div>
            <div className="flex items-center text-3xl text-[var(--accent-color)]">
              <span>
                {" "}
                <FaNairaSign />{" "}
              </span>
              <span>{balance}.00</span>
            </div>
          </div>
          <div>
            <Button size={44} title="+QUICK SAVE" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex justify-center items-center cursor-pointer py-4">
          <div className="flex gap-3 items-center w-fit">
            <div>
              <FaPercentage className="text-[var(--accent-color)]" />
            </div>
            <small>Interests</small>
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
    </div>
  );
};

export default Balance;
