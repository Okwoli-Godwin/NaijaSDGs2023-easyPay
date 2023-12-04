import React,{useState} from 'react'
import axios from 'axios';
import WithdrawModal from '../../../modal/WithdrawModal';

const PaymentHeader:React.FC = () => {
    const optionss:any = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', optionss);

    const [isPaymentOpen, setPaymentOpen] = useState(false);





    const options = {
      method: 'POST',
      url: 'https://api-v2-sandbox.chimoney.io/v0.2/payouts/bank',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'X-API-KEY': '2711144b958cf88043baab3a62160bd8e805c5ac03fd466b8c863e99c46e1100'
      },
      data: {
        subAccount: '1234567',
        turnOffNotification: true,
        banks: [
          {
            countryToSend: 'Nigeria',
            account_bank: '044',
            account_number: '0000000000',
            valueInUSD: 10,
            reference: '1234567890',
            fullname: 'Jane Doe'
          }
        ]
      }
    };
    
   const testWithdraw = ()=>{
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
   }



  return (
<div className='h-full bg-white sticky top-0 border-b px-4  py-3 max-md:shadow' >
<div className='w-full mt-4 max-md:mt-0 max-md:flex-col max-md:items-start  flex items-center gap-2 max-md:gap-0'>
        <h2 className='text-3xl max-md:text-xl font-bold'>Balance</h2>
        <p className='text-gray-600 max-md:text-xs'>{formattedDate}</p>
    </div>
    <div className='mt-5 max-md:mt-3 flex gap-7'>
   <h2 className="text-3xl max-md:text-xl font-semibold tracking-wider"> ₦1000000</h2>
   <button onClick={() =>     setPaymentOpen(true)}className='py-3 max-md:py-2 max-md:text-sm  rounded-lg px-4 bg-indigo-700 text-white'>Withdraw</button>
    </div>
    <WithdrawModal isOpen={isPaymentOpen} onClose={() => setPaymentOpen(false)}/>
    
</div>
  )
}

export default PaymentHeader