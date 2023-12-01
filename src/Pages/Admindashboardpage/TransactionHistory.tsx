import React from 'react'
import TransationTable from '../../Components/blocks/admin/TransationTable'
import avatar from "../../assets/avatar.png"

const TransactionHistory: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="w-full min-h-screen h-full flex justify-center">
      {/* user table */}
      <div className="w-[92%]">
        <TransationTable />
      </div>
=======
    <div className='w-full min-h-screen h-full bg-slate-400'>
        {/* user table */}
        <TransationTable tableName='History' img={avatar}/>
>>>>>>> 6636a30d583db96c8c7a7beea69f61c813296ecf
    </div>
  );
};

export default TransactionHistory;
