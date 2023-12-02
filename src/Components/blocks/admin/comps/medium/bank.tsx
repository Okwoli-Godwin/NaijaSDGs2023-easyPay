import React from "react";
import Balance from "./balance";
import SaveInfo from "./saveInfo";

const Bank: React.FC = () => {
  return (
    <div className="grid grid-cols-3 max-[800px]:grid-cols-1 gap-7">
      <div className="col-span-2">
        <div>
          <Balance balance={0} />
        </div>
        <div>his</div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="rounded-[5px] border-[1px] p-4 flex flex-col gap-2">
          <div className="text-[11px]">INTEREST RATE</div>
          <div className="text-3xl text-[var(--accent-color)]">10%</div>
          <div className="text-[11px]">Per Annum</div>
        </div>
        <div>
          <SaveInfo />
        </div>
      </div>
    </div>
  );
};

export default Bank;
