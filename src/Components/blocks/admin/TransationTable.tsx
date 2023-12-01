
interface tableData{
    tableName : string;
    img: string;
}

const TransactionTable:React.FC<tableData> = ({tableName, img}) => {
  return (
 

<div className="relative overflow-x-auto shadow-md my-3 ">
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row py-5 space-y-4 md:space-y-0 pb-4 bg-white ">
        <div className="flex items-center justify-center px-5 gap-3">
     
            <button className=''>{tableName}</button>
            {/* <button className='dark:text-gray-400'>Received</button>
            <button className='dark:text-gray-400'>Transfer</button>
            <button className='dark:text-gray-400'>Withdraw</button> */}
        </div>
     
    </div>
    {/* table */}
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
             
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                    <img className="w-10 h-10 rounded-full" src={img} alt=""/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">Neil Sims</div>
                        <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td className="px-6 py-4">
                 747476
                </td>
              
                <td className="px-6 py-4">
                    
                     <p className="py-2 w-fit bg-green-100 text-green-700 rounded-2xl  px-2 ">Completed</p>
                    
                </td>
                <td className="px-6 py-4">
                   <p>N20000</p>
                </td>
                <td className="px-6 py-4">
                    21 March 2023
                </td>
            </tr>
        
           
       
           
        </tbody>
    </table>
</div>

  );
};

export default TransactionTable;
