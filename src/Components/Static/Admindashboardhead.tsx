import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PiBell } from "react-icons/pi";
import { BsChevronLeft } from "react-icons/bs";
import Photo from "../blocks/admin/comps/small/photo";

const Adminashboardhead: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSectionHeader: boolean =
    location.pathname.includes("staffs") ||
    location.pathname.includes("payments") ||
    location.pathname.includes("settings") ||
    location.pathname.includes("notifications");
  return (
    <div className="w-full z-[2] py-2 h-full bg-[var(--primary-color)] flex justify-center items-end">
      <div className="flex items-center justify-between w-[92%]">
        <div className="capitalize font-medium text-[14.5px]">
          <div
            className={`${
              isSectionHeader
                ? `max-[800px]:flex max-[800px]:items-center max-[800px]:gap-8`
                : ``
            }`}>
            {isSectionHeader && (
              <div
                onClick={() => navigate(-1)}
                className="cursor-pointer hidden max-[800px]:block">
                <BsChevronLeft className="text-[22px]" />
              </div>
            )}
            <div className={`${isSectionHeader && `max-[800px]:hidden`}`}>
              {location.pathname.includes("staffs") === false &&
              location.pathname.includes("payments") === false &&
              location.pathname.includes("financials") === false &&
              location.pathname.includes("transactions") === false &&
              location.pathname.includes("settings") === false &&
              location.pathname.includes("notifications") === false
                ? "dashboard"
                : location.pathname.includes("staffs")
                ? "staffs"
                : location.pathname.includes("payments")
                ? "payments"
                : location.pathname.includes("financials")
                ? "financials"
                : location.pathname.includes("transactions")
                ? "transactions"
                : location.pathname.includes("settings")
                ? "settings"
                : location.pathname.includes("notifications")
                ? "notifications"
                : ""}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Photo
            for_icon
            icon={<PiBell />}
            size={26}
            onclick={() => navigate("notifications")}
          />
          <Photo size={34} />
        </div>
      </div>
    </div>
  );
};

export default Adminashboardhead;
