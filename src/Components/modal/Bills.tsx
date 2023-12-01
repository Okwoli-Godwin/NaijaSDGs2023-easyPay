import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const Bills:React.FC = ({ isOpen, onClose }: any) => {

    if (!isOpen) return null;



  const [selectedBill, setSelectedBill] = useState('');
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [meterNumber, setMeterNumber] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [dstvPackage, setDstvPackage] = useState('');
  const [dstvAmount, setDstvAmount] = useState(0);

  const handleBillSelection = (bill: any) => {
    setSelectedBill(bill);
  };

  const handleDstvPackageChange = (selectedPackage: string, price: number) => {
    setDstvPackage(selectedPackage);
    setDstvAmount(price);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Handle form submission based on the selected bill
    if (selectedBill === 'DSTV') {
      // Handle DSTV form submission (you can perform further validation)
      console.log('DSTV Smart Card Number:', smartCardNumber);
      console.log('DSTV Package:', dstvPackage);
      console.log('DSTV Amount:', dstvAmount);
    } else if (selectedBill === 'Electricity') {
      // Handle Electricity form submission (you can perform further validation)
      console.log('Electricity Meter Number:', meterNumber);
      console.log('Recharge Amount:', rechargeAmount);
    }

    // Close the modal after submission
    onClose();
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end ">
      <div className="fixed inset-0 bg-[#000000ab]" onClick={onClose}></div>
      <div className="bg-white slide-left h-full w-[450px] max-md:w-full p-8  rounded shadow-lg z-10">
        <button className="text-2xl" onClick={onClose}>
          <IoMdCloseCircle />
        </button>

        {/* Body */}
        <form onSubmit={handleSubmit}>
          <div className="w-full my-2">
            <h2 className="text-xl font-semibold">Select Bill</h2>

            {/* Bill selection */}
            <div className="mt-8">
              <h2 className="mb-2">Please select bill to pay</h2>
              <ul className="grid w-full gap-6 grid-cols-2">
                <li>
                  <input
                    type="radio"
                    id="DSTV"
                    name="billType"
                    value="DSTV"
                    className="hidden peer"
                    onChange={() => handleBillSelection('DSTV')}
                    required
                  />
                  <label
                    htmlFor="DSTV"
                    className="inline-flex items-center justify-between w-full p-5 text-white bg-blue-600  rounded-lg cursor-pointer  peer-checked:border-black peer-checked:border-2  hover:bg-blue-700 transition-all ease-in"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">DSTV</div>
                    </div>
                    <svg
                      className="w-5 h-5 ms-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="Electricity"
                    name="billType"
                    value="Electricity"
                    className="hidden peer"
                    onChange={() => handleBillSelection('Electricity')}
                    required
                  />
                  <label
                    htmlFor="Electricity"
                    className="inline-flex items-center justify-between w-full p-5  bg-yellow-500  rounded-lg cursor-pointer  peer-checked:border-black peer-checked:border-2  hover:bg-yellow-700 transition-all ease-in"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">Electricity</div>
                    </div>
                    <svg
                      className="w-5 h-5 ms-3 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </label>
                </li>
              </ul>
            </div>

            {/* Form based on selected bill */}
            {selectedBill === 'DSTV' && (
              <div className="mt-8">
                <div>
                  <p className="pb-2">Enter DSTV smart card number</p>

                  <label
                    htmlFor="smartCardNumber"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                  >
                    <input
                      type="text"
                      maxLength={10}
                      inputMode="numeric"
                      id="smartCardNumber"
                      required
                      value={smartCardNumber}
                      onChange={(e) => setSmartCardNumber(e.target.value)}
                      placeholder="Smart card number"
                      className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Smart card number
                    </span>
                  </label>
                </div>

                {/* DSTV Package Selection */}
                <div className="mt-6">
                <p className="pb-2">Select DSTV Package:</p>
                  <label htmlFor="dstvPackage"></label>
                  <select
                    id="dstvPackage"
                    value={dstvPackage}
                    onChange={(e) =>
                      handleDstvPackageChange(
                        e.target.value,
                        // Set the prices for each package
                        e.target.value === 'DSTV Kids' ? 5000 : e.target.value === 'DSTV Compact' ? 10000 :  e.target.value === 'DSTV Access' ? 19500 : 0
                      )
                    }
                    required
                    className='w-full py-4 border bg-transparent px-3 '
                  >
                    <option value="" disabled>
                      Select Package
                    </option>
                    <option value="DSTV Kids">DSTV Kids - ₦5000</option>
                    <option value="DSTV Compact">DSTV Compact - ₦10000</option>
                    <option value="DSTV Access">DSTV Access - ₦19500</option>
                    {/* Add more options as needed */}
                  </select>
                </div>

                {/* Amount */}
                <div className="pt-6">
                  <p className="pb-2">Amount: ₦ {dstvAmount}</p>
                </div>
              </div>
            )}

            {selectedBill === 'Electricity' && (
              <div className="mt-8">
                {/* <label htmlFor="meterNumber">Meter Number:</label>
              

                <label htmlFor="rechargeAmount">Recharge Amount:</label>
                <input
                  type="number"
                  id="rechargeAmount"
                  value={rechargeAmount}
                  onChange={(e) => setRechargeAmount(e.target.value)}
                  required
                /> */}

                  <div>
                  <p className="pb-2">Enter meter number</p>

                  <label
                    htmlFor="meterNumber"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                  >
                    <input
                      type="text"
                      maxLength={10}
                      inputMode="numeric"
                      id="meterNumber"
                      required
                      value={meterNumber}
                      onChange={(e) => setMeterNumber(e.target.value)}
                      placeholder="meter number"
                      className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      meter number
                    </span>
                  </label>
                </div>

                {/* recharge amount */}
                <div className='mt-5'>
                  <p className="pb-2">Enter recharge amount</p>

                  <label
                    htmlFor="rechargeAmount"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
                  >
                    <input
                      type="text"
                      maxLength={10}
                      inputMode="numeric"
                      id="rechargeAmount"
                      required
                      value={rechargeAmount}
                      onChange={(e) => setRechargeAmount(e.target.value)}
                      placeholder="Recharge Amount"
                      className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Recharge Amount
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className=" w-full rounded-lg py-3 bg-indigo-500 text-white mt-8 hover:bg-indigo-600"
          >
            Pay Bill
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bills;
