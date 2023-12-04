import { RiCalendarTodoLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const StaffHeader = () => {

  const options:any = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', options);
  

  

  return (
    <div className='w-full py-3 flex items-center gap-5 border-b' >
       <div className='w-full py-3 flex items-center gap-5 flex-wrap'>
         {/* title */}
         <h2 className="text-2xl font-semibold">Staff</h2>

{/* search */}
<form className="max:md:w-full ">   
<label className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div className="relative ">
<div className="absolute text-gray-500 dark:text-gray-400 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
   
    <IoSearch />
</div>
<input type="search"  className="block px-24 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Staffs..." required/>
<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>
</form>

{/* date */}
<div className="flex text-slate-500 items-center gap-2">
<p className="text-2xl"><RiCalendarTodoLine /></p>
<p>{formattedDate}</p>
</div>
       </div>
    </div>
  )
}

export default StaffHeader