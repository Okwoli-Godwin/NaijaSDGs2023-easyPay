import React from 'react'
import TransationTable from '../../Components/blocks/admin/TransationTable'
import avatar from "../../assets/avatar.png"

const TransactionHistory: React.FC = () => {
  return (
    <div className='w-full min-h-screen h-full bg-slate-400'>
        {/* user table */}
        <TransationTable tableName='History' img={avatar}/>
    </div>
  );
};

export default TransactionHistory;
