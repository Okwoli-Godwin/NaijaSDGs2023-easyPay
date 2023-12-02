import React from "react";
import SavingsCard from "../small/savingsCard";
import { BsShield } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import { LuFilm } from "react-icons/lu";

const ThreeSavings: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1 h-48">
      <SavingsCard
        savingsType="Easybank"
        icon={<BsShield />}
        description="Strict savings automatically. Daily, weekly or Monthly. 10% p.a"
        balance={0}
        color="purple"
      />
      <SavingsCard
        savingsType="Flex Naira"
        icon={<LuFilm />}
        description="Flexible savings for emergencies. Free transfers, withdrawals etc. 8% p.a"
        balance={0}
        color="var(--accent-color)"
      />
      <SavingsCard
        savingsType="Safelock"
        icon={<GoLock />}
        description="Lock funds to avoid temptations. Upfront interest. Up to 13% p.a"
        balance={0}
        color="brown"
      />
    </div>
  );
};

export default ThreeSavings;
