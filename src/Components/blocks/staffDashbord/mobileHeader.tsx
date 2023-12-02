import { FC } from "react";
import {

  MdDashboard,
  MdOutlinePayment,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BiTransfer } from "react-icons/bi";
import { TbPigMoney } from "react-icons/tb";
import { PiChartBarFill } from "react-icons/pi";

const MobileHeader: FC = () => {
  const navigationItems = [
    { icon: <MdDashboard />, label: "Home" },
    { icon: <BiTransfer />, label: "Transactions" },
    { icon: <MdOutlinePayment />, label: "Payments" },
    { icon: <TbPigMoney />, label: "Savings" },
    { icon: <PiChartBarFill />, label: "Financials" },
  ];

  return (
    <header className="md:hidden fixed bottom-0 z-10 bg-white  w-full border-t border-gray-100  py-4 px-4 grid grid-cols-5 gap-10 place-items-center transition-all ease-in duration-200">
      {navigationItems.map((item, index) => (
        <NavLink
          to={item.label === "Home" ? "/staff" : item.label}
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "#000000d1 ",
              fontWeight: isActive ? "bold" : "",
              scale: isActive ? "1.09" : "",
            };
          }}
        >
          <button
            key={index}
            className=" text-[24px]   flex flex-col items-center justify-center hover:opacity-80 transition-all ease-in duration-150"
          >
            {item.icon}
            <span className="text-xs p-1">{item.label}</span>
          </button>
        </NavLink>
      ))}
    </header>
  );
};

export default MobileHeader;
