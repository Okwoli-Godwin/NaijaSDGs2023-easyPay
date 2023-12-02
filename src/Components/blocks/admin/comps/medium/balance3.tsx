import React, { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { MdOutlineLabelImportant } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";
import SavingsOption from "./savingsOption";

type iBalance3 = {
  balance: number;
};

const Balance3: React.FC<iBalance3> = ({ balance }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
      <div className="rounded-[5px] border-[1px] overflow-hidden">
        <div className="w-full py-5 flex justify-center border-b-[1px]">
          <div className="w-[90%] flex items-center">
            <div className="w-fit">
              <div className="text-[12px] font-medium">
                {"FLEX ACCOUNT (8%)"}
              </div>
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
          <div
            onClick={() => setShow(true)}
            className="flex justify-center items-center cursor-pointer py-4">
            <div className="flex gap-3 items-center w-fit">
              <div>
                <MdOutlineLabelImportant className="text-[var(--accent-color)]" />
              </div>
              <small>New Label</small>
            </div>
          </div>
          <div
            onClick={() => setShow1(true)}
            className="flex border-x-[1px] justify-center items-center cursor-pointer py-4">
            <div className="flex gap-3 items-center w-fit">
              <div>
                <AiFillBank className="text-[var(--accent-color)]" />
              </div>
              <small>Withdraw</small>
            </div>
          </div>
          <div
            onClick={() => setShow2(true)}
            className="flex justify-center items-center cursor-pointer py-4">
            <div className="flex gap-3 items-center w-fit">
              <div>
                <RiSettingsFill className="text-[var(--accent-color)]" />
              </div>
              <small>Settings</small>
            </div>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-6">
          <div
            onClick={() => setShow3(true)}
            className="p-2 cursor-pointer rouded-[4px] border-[1px]">
            <div className="text-[11px] opacity-[.6]">Interest P.A</div>
            <div className="flex items-center">
              <div className="bg-transparent w-20 border-none outline-none focus:outline-none">
                8%
              </div>
            </div>
          </div>
          <div
            onClick={() => setShow4(true)}
            className="p-2 cursor-pointer rouded-[4px] border-[1px]">
            <div className="text-[11px] opacity-[.6]">Withdrawals</div>
            <div className="flex items-center">
              <div>
                <span className="font-medium">0</span> this month
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <SavingsOption cancel={() => setShow(false)} />}
      {show1 && <SavingsOption cancel={() => setShow1(false)} />}
      {show2 && <SavingsOption cancel={() => setShow2(false)} />}
      {show3 && <SavingsOption cancel={() => setShow3(false)} />}
      {show4 && <SavingsOption cancel={() => setShow4(false)} />}
    </>
  );
};

export default Balance3;
