import { FC } from "react";
import {
  MdOutlineAddHome,
  MdDashboard,
  MdOutlinePayment,
} from "react-icons/md";
import { BsReceipt } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const MobileHeader: FC = () => {
  const navigationItems = [
    { icon: <MdDashboard />, label: "Home" },
    { icon: <MdOutlineAddHome />, label: "Wards" },
    { icon: <MdOutlinePayment />, label: "Payment" },
    { icon: <TiMessages />, label: "Message" },
    { icon: <BsReceipt />, label: "Bills" },
  ];

  return (
    <header className="md:hidden fixed bottom-0 z-10 bg-white dark:bg-black  w-full border-t border-gray-100 dark:border-gray-700 py-2 px-4 grid grid-cols-5 gap-10 place-items-center transition-all ease-in duration-200">
      {navigationItems.map((item, index) => (
        <NavLink
          to={item.label === "Home" ? "/" : item.label}
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
            className=" text-[24px] dark:text-white   flex flex-col items-center justify-center hover:opacity-80 transition-all ease-in duration-150"
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
