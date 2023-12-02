import React from "react";
import celyn from "../../../../../assets/ai3.jpeg";
import { FaNairaSign } from "react-icons/fa6";
import Button from "../small/button";
import styles from "../../styles/home.module.css";
import Photo from "../small/photo";

const QuickTransactions: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-semibold">Quick Transaction</div>
      <div className={`flex gap-6 ${styles.nobars}`}>
        <div className="w-[40px]">
          <Photo size={40} />
          <div className="text-center text-sm font-medium leading-4 mt-1">
            Michael Jordan
          </div>
        </div>
        <div className="w-[40px]">
          <Photo size={40} />
          <div className="text-center text-sm font-medium leading-4 mt-1">
            Edelyn Sandra
          </div>
        </div>
        <div className="w-[40px]">
          <Photo size={40} photo={celyn} />
          <div className="text-center text-sm font-medium leading-4 mt-1">
            Celyn Gustav
          </div>
        </div>
        <div className="w-[40px]">
          <Photo size={40} />
          <div className="text-center text-sm font-medium leading-4 mt-1">
            Ahmed Azhar
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 w-[50%]">
          <div className="opacity-[.2]">
            <FaNairaSign />
          </div>
          <input
            type="number"
            placeholder="Amount"
            className="focus:outline-none border-none outline-none bg-transparent placeholder:opacity-[.4] placeholder:text-[var(--secondary-color)]"
          />
        </div>
        <div className="w-fit">
          <Button title="Send" size={34} />
        </div>
      </div>
    </div>
  );
};

export default QuickTransactions;
