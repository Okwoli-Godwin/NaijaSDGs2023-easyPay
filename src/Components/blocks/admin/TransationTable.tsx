

const TransactionTable = () => {
  return (
 

<div className="relative overflow-x-auto shadow-md my-3 ">
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row py-5 space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center gap-3">
     
            <button className='dark:text-gray-400'>All</button>
            <button className='dark:text-gray-400'>Received</button>
            <button className='dark:text-gray-400'>Transfer</button>
            <button className='dark:text-gray-400'>Withdraw</button>
        </div>
     
    </div>
    {/* table */}
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
             
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                    N20000
                </td>
                <td className="px-6 py-4">
                    21 March 2023
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Transfer
                    </div>
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
                </td>
            </tr>
        
           
       
           
        </tbody>
    </table>
</div>

  );
};

export default TransactionTable;
