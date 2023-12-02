import { IoMdCloseCircle } from "react-icons/io";
import "./style.css"

const GoalModal = ({ isOpen, onClose }:any) => {
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
        <h2 className="text-xl font-semibold">Set up a savings goal</h2>

{/* phone number input */}

<div className="mt-10">
    <h2 className="mb-2">What goal are you saving towards?</h2>

<label
  htmlFor="goalTitle"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
>
  <input
    type="text"
    id="goalTitle"
    required
    placeholder="Goal title"
    className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    Goal title
  </span>
</label>
</div>



{/* recharge amount */}
<div className="mt-10">
    <h2 className="mb-2">How much is your target?</h2>

<label
  htmlFor="Amount"
  className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600"
>
  <input
    type="text"
    inputMode="numeric"
    id="Amount"
    required
    placeholder="target goal"
    className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
  >
    target goal
  </span>
</label>
</div>
{/* recharge amount */}
<div className="mt-10">
    <h2 className="mb-2">Select Funding source</h2>

<select className="w-full py-4 bg-white border px-3 rounded-lg">
    <option value="" disabled> select source</option>
    <option value="savings" > Savings</option>
   
</select>
</div>

{/* submite button */}
<div className="mt-16 w-full"> 
<button   className="inline-block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 transition-all ease-in duration-200"

>
  Create goal</button>
</div>


        </div>
      </form>
      </div>
    </div>
  );
};

export default GoalModal;
