//This is a 'dropping component'... 🤔 actually 'the' dropping component for navigating across the entire application
import React from "react";

import { RiHome6Fill, RiExchangeBoxFill, RiSettingsFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdPayments, MdSavings } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { TfiMoreAlt } from "react-icons/tfi";
import { GrApple } from "react-icons/gr";
import { IoLogOut } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

import styles from "../blocks/admin/styles/nav.module.css";
import NavBar from "../blocks/admin/comps/small/navbar";
import More from "../blocks/admin/comps/medium/more";

const Adminsidebar: React.FC = () => {
  const location = useLocation();
  const [more, setMore] = React.useState<boolean>(false);
  return (
    <>
      <div className="w-full flex flex-col z-[2] h-full text-[var(--primary-color)] bg-[var(--accent-color)] max-[800px]:bg-[var(--primary-color)] max-[800px]:text-[var(--secondary-color)]">
        <div className="h-full">
          <div className="w-full h-[35px] mt-6 mb-5 flex justify-center items-center max-[800px]:hidden">
            <GrApple className="text-[var(--accent-color-lite)] text-4xl" />
          </div>
          <div className="w-full max-[800px]:h-full flex justify-center">
            <div
              //   style={{ width: "calc(100% - 10px)" }}
              className={`grid grid-rows-7 max-[800px]:grid-rows-1 max-[800px]:grid-cols-4 h-[270px] max-[800px]:h-full gap-[5px] ${styles.partialwidth}`}>
              <NavBar
                page="Dashboard"
                icon={<RiHome6Fill />}
                is_active={
                  location.pathname.includes("staffs") === false &&
                  location.pathname.includes("payments") === false &&
                  location.pathname.includes("financials") === false &&
                  location.pathname.includes("transaction-history") === false &&
                  location.pathname.includes("settings") === false &&
                  location.pathname.includes("notifications") === false &&
                  location.pathname.includes("savings") === false
                    ? true
                    : false
                }
                path=""
                onclick={() => setMore(false)}
              />
              <NavBar
                page="Staffs"
                icon={<BsFillPeopleFill />}
                is_active={location.pathname.includes("staffs") ? true : false}
                path="staffs"
                dektop_only
              />
              <NavBar
                page="Payments"
                icon={<MdPayments />}
                is_active={
                  location.pathname.includes("payments") ? true : false
                }
                path="payments"
                dektop_only
              />
              <NavBar
                page="Financials"
                icon={<BiSolidBarChartAlt2 />}
                is_active={
                  location.pathname.includes("financials") ? true : false
                }
                path="financials"
                onclick={() => setMore(false)}
              />
              <NavBar
                page="Savings"
                icon={<MdSavings />}
                is_active={location.pathname.includes("savings") ? true : false}
                path="savings"
                dektop_only
              />
              <NavBar
                page="Transactions"
                icon={<RiExchangeBoxFill />}
                is_active={
                  location.pathname.includes("transaction-history")
                    ? true
                    : false
                }
                path="transaction-history"
                onclick={() => setMore(false)}
              />
              <NavBar
                page="Settings"
                icon={<RiSettingsFill />}
                is_active={
                  location.pathname.includes("settings") ? true : false
                }
                path="settings"
                dektop_only
              />
              <div
                onClick={() => setMore(!more)}
                className="max-[800px]:block hidden">
                <NavBar
                  page={more ? "Less" : "More"}
                  icon={more ? <AiOutlineClose /> : <TfiMoreAlt />}
                  is_active={false}
                  path="#"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-[800px]:hidden justify-center h-[150px]">
          <div className={`${styles.partialwidth} h-fit`}>
            <NavBar
              page="Log out"
              icon={<IoLogOut />}
              is_active={false}
              path=""
              dektop_only
            />
          </div>
        </div>
      </div>
      {more && <More cancel={() => setMore(false)} />}
    </>
  );
};

export default Adminsidebar;
