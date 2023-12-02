import { MdDashboard, MdPayment } from "react-icons/md";


import { RiLogoutCircleLine } from "react-icons/ri";
import Navprop from "../../../props/Navprop";
import { TbPigMoney } from "react-icons/tb";
import { BiTransfer } from "react-icons/bi";
import { PiChartBarFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";

const TabletHeader = () => {
  return (
    <div className="w-[80px] h-screen hidden bg-indigo-600 max-lg:block max-md:hidden">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[95%] h-[95%] flex flex-col items-center gap-6 ">
          {/* logo */}
          <h1 className="text-3xl text-white font-bold">EP</h1>
          <hr className=" w-full" />

          {/* navigation */}
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <Navprop
                icon={<MdDashboard />}
                route="/staff"
                color="white"
                size="3xl"
              />

<Navprop
                
                icon={<BiTransfer />}
                route="transactions"
                color="white"
                size="3xl"
              />
<Navprop
                
                icon={<MdPayment />}
                route="payments"
                color="white"
                size="3xl"
              />

              <Navprop
                icon={<TbPigMoney />}
                route="Savings"
                color="white"
                size="3xl"
              />
              <Navprop
                icon={<PiChartBarFill />}
                route="financials"
                color="white"
                size="3xl"
              />
              <Navprop
                icon={<IoSettings />}
                route="settings"
                color="white"
                size="3xl"
              />
            </div>

            {/* support */}
            <div className="flex flex-col gap-8">
            
              <Navprop
                icon={<RiLogoutCircleLine />}
                route=""
                color="white"
                size="3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletHeader;