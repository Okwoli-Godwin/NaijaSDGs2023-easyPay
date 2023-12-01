import React from "react";
import styles from "../../styles/nav.module.css";
import NavBar from "../small/navbar";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { RiSettingsFill } from "react-icons/ri";

type iMore = {
  cancel: () => void;
};

const More: React.FC<iMore> = ({ cancel }) => {
  const imunity = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={cancel}
      style={{ height: "calc(100vh - 56px)" }}
      className={`fixed z-[1] left-0 top-0 w-screen hidden max-[800px]:flex justify-center items-end ${styles.fadein}`}>
      <div
        onClick={imunity}
        className={`w-[72%] border-[1px] h-[54px] bg-[var(--primary-color)] grid grid-cols-3 gap-10 mb-[14px] ${styles.popup}`}>
        <NavBar
          page="Staffs"
          icon={<BsFillPeopleFill />}
          is_active={false}
          path="staffs"
          onclick={cancel}
          only_icons
        />
        <NavBar
          page="Payments"
          icon={<MdPayments />}
          is_active={false}
          path="payments"
          onclick={cancel}
          only_icons
        />
        <NavBar
          page="Settings"
          icon={<RiSettingsFill />}
          is_active={false}
          path="settings"
          onclick={cancel}
          only_icons
        />
      </div>
    </div>
  );
};

export default More;
