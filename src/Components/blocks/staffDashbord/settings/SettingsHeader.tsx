import React from 'react'

const SettingsHeader:React.FC = () => {
  return (
    <div className='w-full bg-white rounded-lg shadow py-6 mt-6 px-5 grid  gap-7 grid-cols-4 max-lg:grid-cols-2'>
        <div>
            <p>Staff Name:</p>
            <input type="text" placeholder='John Doe'  className='mt-3 outline-none placeholder:text-black font-semibold'/>
        </div>
        <div>
            <p>Staff ID:</p>
            <p  className='mt-3 outline-none placeholder:text-black font-semibold'>562362356s45t</p>
        </div>
        <div>
            <p>Staff ID:</p>
            <p  className='mt-3 outline-none placeholder:text-black font-semibold'>562362356s45t</p>
        </div>
        <div>
            <p>Date 0f Birth:</p>
            <p  className='mt-3 outline-none placeholder:text-black font-semibold'>20-11-1994</p>
        </div>
    </div>
  )
}

export default SettingsHeader