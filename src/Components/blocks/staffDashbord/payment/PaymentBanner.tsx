import React from 'react'

const PaymentBanner:React.FC = () => {
  return (
    <div className='py-6 min-h-[23vh] mt-5 bg-indigo-400 rounded-xl gap-5 flex justify-between max-lg:flex-col'>
        <div className='w-1/2 max-lg:w-full border-r max-lg:border-b  flex justify-center items-center flex-col gap-4'>
            <h2 className='font-semibold text-2xl max-md:text-xl'>Total sent</h2>
            <h1 className='text-3xl max-md:text-2xl tracking-widest font-semibold'> ₦900000.00</h1>
            <span className='mt-2'>see details</span>
             </div>
             {/* total received */}
             <div className='w-1/2 max-lg:w-full  flex justify-center items-center flex-col gap-4'>
            <h2 className='font-semibold text-2xlmax-md:text-xl'>Total Received</h2>
            <h1 className='text-3xl tracking-widest font-semibold max-md:text-2xl '> ₦1000000.00</h1>
            <span className='mt-2'>see details</span>
             </div>

    </div>
  )
}

export default PaymentBanner