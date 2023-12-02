import React, { useState } from 'react'
import Cards from '../home/Cards'
import GoalModal from '../../../modal/GoalModal';

const SavingsHome:React.FC = () => {
    const [isBillOpen, setBillOpen] = useState(false);

  return (
    <div>
        {/* cards */}
        <div className='w-full grid grid-cols-4 gap-5 max-lg:grid-cols-2'>
            <Cards title='Savings' figure='N50000' bottomText='' figureColor='text-blue-500'/>
            <Cards title='Expenditure' figure='N30000' bottomText='' figureColor='text-red-500'/>
            <Cards title='Savings' figure='N20000' bottomText='' figureColor='text-indigo-500'/>
            <Cards title='Total Expenditure' figure='N10000' bottomText='' figureColor='text-green-500'/>
        </div>

        {/* save towards a goal */}
        <div className='mt-10'>
            <h2 className='text-lg font-semibold'>Save towards a goal</h2>
            <div onClick={() => setBillOpen(true)} className='shadow text-lg hover:bg-white transition-all ease-in cursor-pointer border w-[250px] h-[120px] flex items-center justify-center rounded-lg mt-4'>
                <button>create a goal</button>
            </div>
        </div>

        <GoalModal  isOpen={isBillOpen} onClose={() => setBillOpen(false)}/>
    </div>
  )
}

export default SavingsHome
