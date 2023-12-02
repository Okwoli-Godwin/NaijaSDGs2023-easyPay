import React from "react";
import Balance2 from "./balance2";

const SafeLock: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <Balance2 balance={0} />
      </div>
      <div>
        <div className="rounded-[5px] border-[1px] p-4 flex flex-col gap-2">
          <div className="text-[11px]">INTEREST RATE</div>
          <div className="text-3xl text-[var(--accent-color)]">6% - 13%</div>
          <div className="text-[11px]">Per Annum</div>
        </div>
      </div>
    </div>
  );
};

export default SafeLock;
