
import {
  MdDashboard,

  MdManageHistory,
  MdPayment 
} from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsArrowLeftRight} from "react-icons/bs";
import { useState } from "react";
import { BiTransfer } from "react-icons/bi";

import { TbPigMoney } from "react-icons/tb";
import { PiChartBarFill } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";
import { IoSettings } from "react-icons/io5";

import Navprop from "../../props/Navprop";

const Staffsidebar = () => {
  const [show, setShow] = useState(true);




  return (
    <div
      className={`${
        show
          ? "w-[210px] bg-indigo-600"
          : "w-[90px] bg-indigo-600"
      }  flex items-center relative justify-center  transition-all ease-linear duration-[200ms]  max-md:hidden max-lg:hidden max-md:w-full h-screen max-md:h-full max-lg:w-[8%]`}
    >
      <div
        className={`${
          show ? "w-[90%]" : "w-[60%] "
        } h-[95%] flex items-start flex-col`}
      >
        {/* logo and name */}
        {/* desktop logo view */}
        <div className="flex items-center gap-3  pb-8 ">
          {/* circle over text */}
          <div
            className={`p-1 ${
              show
                ? "border-black"
                : "border-white w-full flex justify-center"
            } border rounded-full`}
          >
            <div className="py-[1px] px-[8px] bg-[#DBDEE2] text-white  text-xl  rounded-full">
              E
            </div>
          </div>

          {/* name */}
          {show ? <p className="text-white">Easypay</p> : null}
        </div>
        {/* tablet logo view  */}

        {/* navigation */}
        <div className="flex flex-col justify-between h-full max-lg:hidden">
          {/* first nav */}
          <div className="">
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
              <Navprop
                text={show ? "Home" : ""}
                icon={<MdDashboard />}
                route=""
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
             
              <Navprop
                text={show ? "Fund Transfers" : ""}
                icon={<BiTransfer />}
                route="fund-transfers"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
                <Navprop
                text={show ? "payments" : ""}
                icon={<MdPayment />}
                route="payments"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
                <Navprop
                text={show ? "Savings plan" : ""}
                icon={<TbPigMoney />}
                route="savings"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
                <Navprop
                text={show ? "Financials" : ""}
                icon={<PiChartBarFill />}
                route="financials"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
                <Navprop
                text={show ? "Settings" : ""}
                icon={<IoSettings />}
                route="settings"
                color={show ? "[#ff6e00]" : "white"}
                size={show ? "xl" : "3xl"}
              />
                
             
            </div>
        
          
          </div>
          {/* support nav */}

          <div>
            <div
              className={`flex flex-col gap-5 ${
                show ? "items-start" : "items-center text-3xl gap-7"
              } transition-all ease-in duration-200`}
            >
             
              <p >
                <Navprop
                  text={show ? "log out" : ""}
                  icon={<RiLogoutCircleLine />}
                  route=""
                  color="white"
                  size={show ? "xl" : "3xl"}
                />
              </p>
            </div>
          </div>

          {/* toggle */}
          <div
            className="p-3 cursor-pointer text-lg shadow-md bg-indigo-600 z-30 rounded-full text-white absolute top-14 -right-5"
            onClick={() => setShow(!show)}
          >
            <BsArrowLeftRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staffsidebar;