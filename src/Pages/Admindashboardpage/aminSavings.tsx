import React from "react";
import SavingsBalance from "../../Components/blocks/admin/comps/medium/savingsBalance";
import ThreeSavings from "../../Components/blocks/admin/comps/medium/threeSavings";

const AminSavings: React.FC = () => {
  return (
    <div className="w-full flex justify-center pb-72">
      <div className="w-[92%] flex flex-col">
        <div className="text-[16px] hidden max-[800px]:flex">Savings</div>
        <div className="text-slate-500">Let's see how well you're doing.</div>
        <div className="mt-10">
          <SavingsBalance />
        </div>
        <div className="mt-10">
          <ThreeSavings />
        </div>
      </div>
    </div>
  );
};

export default AminSavings;
