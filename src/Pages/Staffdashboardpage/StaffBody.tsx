import React from 'react'
import StaffCard from '../../Components/blocks/admin/StaffCard'

const StaffBody:React.FC = () => {
  return (
    <div className='py-5 '>
        <div className='mb-5 bg-white w-fit px-5 flex py-1 gap-4 rounded-full'>
            <button className='rounded-full bg-green-500 text-white py-2 px-6 '>
                staff
            </button>
            <button className='rounded-full bg-transparent text-black py-2 px-6 '>
                staff
            </button>
        </div>
<div className='grid grid-cols-3 gap-4 px-5 max-lg:grid-cols-2 max-md:grid-cols-1'>
<StaffCard/>
<StaffCard/>
<StaffCard/>
</div>
    </div>
  )
}

export default StaffBody