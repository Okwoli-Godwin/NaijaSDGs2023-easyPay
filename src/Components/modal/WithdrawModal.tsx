import axios from 'axios';
import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  
  // List of countries for the dropdown
  const countries = ['Nigeria', 'United States', 'Canada', 'Ghana'];
  
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    countryToSend: '',
    accountBank: '',
    accountNumber: '',
    valueInUSD: '',
    fullName: '',
    branchCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.countryToSend || !formData.accountBank || !formData.accountNumber || !formData.valueInUSD) {
      alert('Please fill in all required fields');
      return;
    }

    try {
        // Set loading to true to indicate processing
      setLoading(true);
      // Prepare data for API request
      const requestData = {
        subAccount: "1234567",
        turnOffNotification: false,
        banks: [
          {
            countryToSend: formData.countryToSend,
            account_bank: formData.accountBank,
            account_number: formData.accountNumber,
            valueInUSD: formData.valueInUSD,
            reference: '1234567890', // You may want to generate a dynamic reference
            fullname: formData.fullName,
            branch_code: formData.branchCode,
          },
        ],
      };

      const options = {
        method: 'POST',
        url: 'https://api-v2-sandbox.chimoney.io/v0.2/payouts/bank',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-KEY': '96b5ad110c3b91f2001e73a11e65dfc022ccc5ff183a32964fd9adb3cf35f4e7',
          
        },
        data: requestData,
      };

      // Make API request
      const response = await axios.request(options);

      // Handle the response
      alert(response.data);

      // Close the modal after submission
      onClose();
    } catch (error:any) {
      alert(error?.response?.data?.error);
    } finally {
        // Reset loading to false after processing
        setLoading(false);
      }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-y-scroll">
      <div className="fixed inset-0 bg-[#000000ab]" onClick={onClose}></div>
      <div className="bg-white slide-left h-full w-[500px] max-md:w-full p-8 rounded shadow-lg z-10">
        <button className="text-2xl" onClick={onClose}>
          <IoMdCloseCircle />
        </button>

        {/* Body */}
        <form onSubmit={handleSubmit}>
          <div className="w-full my-2">
            <h2 className="text-xl font-semibold">Withdraw Balance</h2>

            {/* Form inputs */}
            <div className="mt-6 max-md:mt-3">
              <h2 className="mb-4 max-md:text-sm">Please fill in the form with accurate information to process withdrawal.</h2>

             {/* Dropdown for Country to Send */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Country to Send</label>
                <select
                  name="countryToSend"
                  value={formData.countryToSend}
                  onChange={handleChange}
                  className="mt-1 p-2 border bg-transparent rounded w-full"
                  required
                >
                  <option value="" disabled>Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Account Bank</label>
                <input
                  type="text"
                  name="accountBank"
                  value={formData.accountBank}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Value in USD</label>
                <input
                  type="text"
                  name="valueInUSD"
                  value={formData.valueInUSD}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Branch Code</label>
                <input
                  type="text"
                  name="branchCode"
                  value={formData.branchCode}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg py-3 bg-indigo-500 text-white mt-8 hover:bg-indigo-600"
            disabled={loading} // Disable the button while processing
          >
            {loading ? 'Processing...' : 'Withdraw funds'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawModal;
