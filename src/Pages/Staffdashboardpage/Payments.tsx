import React from 'react'
import PaymentHeader from '../../Components/blocks/staffDashbord/payment/PaymentHeader'
import PaymentBanner from '../../Components/blocks/staffDashbord/payment/PaymentBanner'
import Transactions from './Transactions'

const Payments:React.FC = () => {
  return (
    <div className='ml-8 max-md:ml-0 '>
        {/* header */}
        <PaymentHeader/>
        <PaymentBanner/>
        <div className='my-8'>
            <Transactions/>
        </div>
    </div>
  )
}

export default Payments