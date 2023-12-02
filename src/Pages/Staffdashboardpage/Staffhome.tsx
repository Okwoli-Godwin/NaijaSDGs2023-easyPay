import StaffHeader from "../../Components/blocks/admin/StaffHeader"
import Cards from "../../Components/blocks/staffDashbord/home/Cards"


import avatar from "../../assets/avatar.png"
import Favourites from "../../Components/blocks/staffDashbord/home/Favourites"
import { MdOutlineWifiCalling } from "react-icons/md";
import Button from "../../Components/blocks/staffDashbord/home/Button"
import TransactionTable from "../../Components/blocks/admin/TransationTable";


const Staffhome = () => {
  return (
    <div className="w-full py-5 ">
       <div className=" grid grid-cols-5 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
        <Cards title="Balance" figure="₦50000" figureColor="text-green-500" bottomText="Available"/>
        <Cards title="Wallet" figure="1234567890" figureColor="text-indigo-500" bottomText="Wallet number"/>
        <Cards title="Expenditure" figure="₦767.5" figureColor="text-red-500" bottomText="Expenses"/>
       
       

      </div>

      {/* favourites */}
      <div className="grid gap-8 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-16 ">
        {/* favourites */}
   <div>
   <div className="shadow rounded-2xl  p-4">
    <div className="flex  justify-between py-3">
      <p>Favourite Transfers</p>
      <p className="font-normal text-indigo-700 cursor-pointer">see all</p>
        
    </div>
   <div className="flex flex-col gap-2">
   <Favourites img={avatar} username="Anthoney Joshua"/>
   <Favourites img={avatar} username="Victor Joshua"/>
   <Favourites img={avatar} username="Anthoney Joshua"/>

   </div>
    </div>

   </div>

   {/* airtime purchase */}

  <div className=" rounded-3xl  flex justify-start ml-4 max-md:ml-0 items-center">
  <Button onclick={()=>{}} text="Buy Data/Airtime" icon={ <MdOutlineWifiCalling />}/>

  </div>
  <div className=" rounded-3xl  flex justify-start ml-4 max-md:ml-0 items-center">
  <Button onclick={()=>{}} text="Pay Bills" icon={ <MdOutlineWifiCalling />}/>

  </div>

      </div>

<div>

</div>




      {/* <StaffBody/> */}
      <div className="rounded-3xl overflow-hidden py-5" >

      <TransactionTable tableName="Transfers" img={avatar}/>
      </div>
    </div>
  )
}

export default Staffhome