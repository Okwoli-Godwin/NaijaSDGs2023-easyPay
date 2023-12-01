import { IoMdCloseCircle } from "react-icons/io";
import "./style.css"

const Airtime = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end ">
      <div
        className="fixed inset-0 bg-[#000000ab]"
        onClick={onClose}
      ></div>
      <div className="bg-white slide-left h-full w-[450px] max-md:w-full p-8  rounded shadow-lg z-10">
      <button
          className="text-2xl"
          onClick={onClose}
        >
          <IoMdCloseCircle/>
        </button>
   
      
      {/* body */}
      <form >
      <div className="w-full my-2">
        <h2 className="text-xl font-semibold">Purchase Data or Airtime</h2>

{/* phone number input */}

<div className="mt-10">
    <h2 className="mb-2">Enter mobile number</h2>

<label
  htmlFor="UserNumber"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
>
  <input
    type="number"
    maxLength={11}
    id="UserNumber"
    required
    placeholder="Phone number"
    className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Phone number
  </span>
</label>
</div>

{/* select network provider */}
<div className="mt-10">

<h3 className="mb-5 ">Select Network Provider</h3>
<ul className="grid w-full gap-6 grid-cols-2">
    <li>
        <input type="radio" id="mtn" name="mtn" value="mtn" className="hidden peer" required/>
        <label htmlFor="mtn" className="inline-flex items-center justify-between w-full p-5 text-gray-700 bg-yellow-400  rounded-lg cursor-pointer  peer-checked:border-indigo-600 peer-checked:text-indigo-600  hover:bg-yellow-300 transition-all ease-in">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">MTN</div>
               
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="Glo" name="Glo" value="Glo" className="hidden peer" required/>
        <label htmlFor="Glo" className="inline-flex items-center justify-between w-full p-5 text-white bg-lime-500  rounded-lg cursor-pointer  peer-checked:border-indigo-600 peer-checked:text-indigo-600  hover:bg-lime-500 transition-all ease-in">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">Glo</div>
               
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="9Mobile" name="9Mobile" value="9Mobile" className="hidden peer" required/>
        <label htmlFor="9Mobile" className="inline-flex items-center justify-between w-full p-5 text-white bg-green-600  rounded-lg cursor-pointer  peer-checked:border-indigo-600 peer-checked:text-indigo-600  hover:bg-green-500 transition-all ease-in">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">9Mobile</div>
               
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="Airtel" name="Airtel" value="Airtel" className="hidden peer" required/>
        <label htmlFor="Airtel" className="inline-flex text-white items-center justify-between w-full p-5 text-gray-700 bg-red-500  rounded-lg cursor-pointer  peer-checked:border-indigo-600 peer-checked:text-indigo-600  hover:bg-red-400 transition-all ease-in">                           
            <div className="block">
                <div className="w-full text-lg  font-semibold">Airtel</div>
               
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
  

</ul>

</div>

{/* recharge amount */}
<div className="mt-10">
    <h2 className="mb-2">Enter recharge amount</h2>

<label
  htmlFor="Amount"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
>
  <input
    type="number"
    maxLength={11}
    id="Amount"
    required
    placeholder="Recharge Amount"
    className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Recharge Amount
  </span>
</label>
</div>

{/* submite button */}
<div className="mt-16 w-full"> 
<button   className="inline-block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 transition-all ease-in duration-200"

>
  Recharge</button>
</div>


        </div>
      </form>
      </div>
    </div>
  );
};

export default Airtime;
