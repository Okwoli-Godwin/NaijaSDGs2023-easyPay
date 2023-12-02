import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

type iBalance2 = {
  balance: number;
};

const Balance2: React.FC<iBalance2> = ({ balance }) => {
  return (
    <div className="rounded-[5px] border-[1px] overflow-hidden">
      <div className="w-full py-10 flex justify-center border-b-[1px]">
        <div className="w-[90%] flex items-center">
          <div className="w-fit">
            <div className="text-[12px] font-medium">SAFELOCK BALANCE</div>
            <div className="flex items-center text-3xl text-[var(--accent-color)]">
              <span>
                {" "}
                <FaNairaSign />{" "}
              </span>
              <span>{balance}.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center cursor-pointer py-4">
          <div className="flex gap-3 items-center w-fit">
            <div>
              <AiOutlinePlus className="text-[var(--accent-color)]" />
            </div>
            <small>Create a SafeLock</small>
          </div>
        </div>
        <div className="flex border-l-[1px] justify-center items-center cursor-pointer py-4">
          <div className="flex gap-3 items-center w-fit">
            <div>
              <FiInfo className="text-[var(--accent-color)]" />
            </div>
            <small>What is a Safelock?</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance2;
