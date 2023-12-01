import React from "react";
import Photo from "./photo";
import { FaSackDollar, FaNairaSign } from "react-icons/fa6";
import { HiMinusSm } from "react-icons/hi";

type iHistoryData = {
  name: string;
  photo?: any;
  type: string;
  date: string;
  amount: number;
  activity: "expense" | "income";
};

const TransactionHistoryData: React.FC<iHistoryData> = ({
  name,
  photo,
  type,
  date,
  amount,
  activity,
}) => {
  return (
    <div className="grid grid-cols-7 gap-20 font-medium text-[12px] my-3">
      <div className="col-span-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <Photo size={22} photo={photo} />
          </div>
          <div>{name}</div>
        </div>
        <div className="z-[-1]">
          <FaSackDollar
            style={{ color: activity === "expense" ? "brown" : "green" }}
            className="opacity-[.4] "
          />
        </div>
      </div>
      <div className="opacity-[.5] flex z-[-1] items-center">{type}</div>
      <div
        style={{ whiteSpace: "nowrap" }}
        className="col-span-2 opacity-[.5] z-[-1] flex items-center">
        {date}
      </div>
      <div className="font-extrabold z-[-1] flex items-center justify-end w-full max-[1300px]:translate-x-[5px] max-[1100px]:translate-x-[22px] max-[1000px]:translate-x-[10px] max-[900px]:translate-x-[12px] max-[800px]:translate-x-[0px] max-[600px]:translate-x-[22px]">
        <div className="flex items-center justify-end w-full">
          {activity === "expense" && (
            <div className="flex items-center">
              <HiMinusSm />
            </div>
          )}
          <div>
            <FaNairaSign />
          </div>
          <div>{amount}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryData;
