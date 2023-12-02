import React from "react";
import TransationTable from "../../Components/blocks/admin/TransationTable";

const TransactionHistory: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen h-full flex justify-center">
        {/* user table */}
        <div className="w-[92%]">
          <TransationTable />
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
