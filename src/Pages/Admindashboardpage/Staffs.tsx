import React from "react";
import StaffTable from "../../Components/blocks/admin/comps/medium/staffTable";

const Staffs: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[92%]">
        <StaffTable />
      </div>
    </div>
  );
};

export default Staffs;
