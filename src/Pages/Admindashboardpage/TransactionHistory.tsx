import React from 'react'
import TransationTable from '../../Components/blocks/admin/TransationTable'

const TransactionHistory:React.FC = () => {
  return (
    <div className='w-full min-h-screen h-full bg-slate-400'>
        {/* user table */}
        <TransationTable/>
    </div>
  )
}

export default TransactionHistory