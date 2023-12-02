import React from 'react'

const PaymentHeader:React.FC = () => {
    const options:any = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);

  return (
<div className='h-full bg-white sticky top-0 border-b pb-3' >
<div className='w-full mt-4 max-md:mt-0 max-md:flex-col max-md:items-start  flex items-center gap-2'>
        <h2 className='text-3xl max-md:text-xl font-bold'>Balance</h2>
        <p>{formattedDate}</p>
    </div>
    <div className='mt-5 flex gap-7'>
   <h2 className="text-3xl max-md:text-2xl font-semibold tracking-wider"> ₦1000000</h2>
   <button className='py-3 max-md:py-2  rounded-lg px-4 bg-indigo-700 text-white'>Withdraw</button>
    </div>
</div>
  )
}

export default PaymentHeader