import React, { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import Button from "../small/button";
import { FaPercentage } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { RiSettingsFill } from "react-icons/ri";
import SavingsOption from "./savingsOption";

type iBalance = {
  balance: number;
};

const Balance: React.FC<iBalance> = ({ balance }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <>
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
              <Button
                onclick={() => setShow(true)}
                size={44}
                title="+QUICK SAVE"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div
            onClick={() => setShow1(true)}
            className="flex justify-center items-center cursor-pointer py-4">
            <div className="flex gap-3 items-center w-fit">
              <div>
                <FaPercentage className="text-[var(--accent-color)]" />
              </div>
              <small>Interests</small>
            </div>
          </div>
          <div
            onClick={() => setShow2(true)}
            className="flex border-x-[1px] justify-center items-center cursor-pointer py-4">
            <div className="flex gap-3 items-center w-fit">
              <div>
                <AiFillBank className="text-[var(--accent-color)]" />
              </div>
              <small>Withdraw</small>
            </div>
          </div>
          <div
            onClick={() => setShow3(true)}
            className="flex justify-center items-center cursor-pointer py-4">
            <div className="flex gap-3 items-center w-fit">
              <div>
                <RiSettingsFill className="text-[var(--accent-color)]" />
              </div>
              <small>Settings</small>
            </div>
          </div>
        </div>
      </div>
      {show && <SavingsOption cancel={() => setShow(false)} />}
      {show1 && <SavingsOption cancel={() => setShow1(false)} />}
      {show2 && <SavingsOption cancel={() => setShow2(false)} />}
      {show3 && <SavingsOption cancel={() => setShow3(false)} />}
    </>
  );
};

export default Balance;
