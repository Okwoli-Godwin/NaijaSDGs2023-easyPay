import { MdDashboard, MdManageHistory, MdOutlinePayment } from "react-icons/md";

import { BsReceipt } from "react-icons/bs";

import { RiLogoutCircleLine } from "react-icons/ri";
import Navprop from "../../../props/Navprop";

const TabletHeader = () => {
  return (
    <div className="w-[80px] h-screen hidden bg-blue-500 max-lg:block max-md:hidden">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[95%] h-[95%] flex flex-col items-center gap-6 ">
          {/* logo */}
          <h1 className="text-3xl text-white">EP</h1>
          <hr className=" w-full" />

          {/* navigation */}
          <div className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <Navprop
                icon={<MdDashboard />}
                route=""
                color="white"
                size="3xl"
              />

              <Navprop
                icon={<MdOutlinePayment />}
                route="payment"
                color="white"
                size="3xl"
              />
              <Navprop
                icon={<BsReceipt />}
                route="bills"
                color="white"
                size="3xl"
              />
              <Navprop
                icon={<MdManageHistory />}
                route="history"
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