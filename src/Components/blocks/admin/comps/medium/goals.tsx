import React from "react";
import Button from "../small/button";
import Goal from "../small/goal";

const Goals: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-[92%]">
      <div className="flex items-center justify-between">
        <div className="font-medium">My Goals</div>
        <div>
          <Button size={26} title="Add" />
        </div>
      </div>
      <div>
        <Goal goal="New iMac" status={50} />
      </div>
      <div>
        <Goal goal='New Macbook 14"' status={75} color="green" />
      </div>
    </div>
  );
};

export default Goals;
