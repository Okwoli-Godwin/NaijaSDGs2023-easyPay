import React from "react";
import { BsShield } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import { LuFilm } from "react-icons/lu";

type iTabs = {
  first: boolean;
  second: boolean;
  third: boolean;
  firstClick: () => void;
  secondClick: () => void;
  thirdClick: () => void;
};

const Tabs: React.FC<iTabs> = ({
  first,
  second,
  third,
  firstClick,
  secondClick,
  thirdClick,
}) => {
  return (
    <div className="border-b-[1px] flex items-end">
      <div
        onClick={firstClick}
        style={{
          borderBottom: first ? "2px solid var(--accent-color)" : "none",
        }}
        className="px-6 pb-2 flex gap-2 items-center cursor-pointer">
        <div>
          <BsShield className="text-[var(--accent-color)]" />
        </div>
        <div>Easybank</div>
      </div>
      <div
        onClick={secondClick}
        style={{
          borderBottom: second ? "2px solid var(--accent-color)" : "none",
        }}
        className="px-6 pb-2 flex gap-2 items-center cursor-pointer">
        <div>
          <LuFilm className="text-[var(--accent-color)]" />
        </div>
        <div>Flex Naira</div>
      </div>
      <div
        onClick={thirdClick}
        style={{
          borderBottom: third ? "2px solid var(--accent-color)" : "none",
        }}
        className="px-6 pb-2 flex gap-2 items-center cursor-pointer">
        <div>
          <GoLock className="text-[var(--accent-color)]" />
        </div>
        <div>Safelock</div>
      </div>
    </div>
  );
};

export default Tabs;
