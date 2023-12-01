import React from "react";
import { PiMonitor } from "react-icons/pi";

type iGoal = {
  color?: string;
  goal: string;
  status: number;
};

const Goal: React.FC<iGoal> = ({ color, goal, status }) => {
  return (
    <div
      style={{ backgroundColor: `#52748a1d` }}
      className={`w-full h-[40px] flex justify-center items-center opacity-[.6] rounded-[3px]`}>
      <div className="w-[94%] h-[70%] flex gap-3">
        <div className="bg-[var(--primary-color)] rounded-[3px] flex justify-center items-center w-10">
          <PiMonitor
            style={{
              color: `${color ? `${color}` : `#52748a`}`,
            }}
            className="text-xl"
          />
        </div>
        <div className="flex-1 pr-3 py-[2px] text-[10.6px] font-medium flex flex-col justify-between">
          <div className="flex  items-center justify-between">
            <div>{goal}</div>
            <div
              style={{
                color: `${color ? `${color}` : `#52748a`}`,
              }}>{`${status}%`}</div>
          </div>
          <div className="w-full rounded-full h-[5px] bg-[var(--primary-color)] flex overflow-hidden">
            <div
              style={{
                width: `${status}%`,
                backgroundColor: `${color ? `${color}` : `#52748a`}`,
              }}
              className={`h-full rounded-full transition-all duration-[.4s]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
