import React from "react";
import styles from "../../styles/nav.module.css";
import { GrClose } from "react-icons/gr";

type iSavingsOption = {
  cancel: () => void;
  component?: any;
};

const SavingsOption: React.FC<iSavingsOption> = ({ cancel, component }) => {
  const immune = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={cancel}
      className={`fixed z-[2] top-0 left-0 flex justify-end w-screen h-screen ${styles.fadein}`}>
      <div
        onClick={immune}
        className={`${styles.slide} w-[350px] bg-[var(--primary-color)] flex justify-center h-full`}>
        <div className="w-[90%]">
          <div className="py-10 flex justify-end">
            <div onClick={cancel} className="w-fit cursor-pointer">
              <GrClose />
            </div>
          </div>
          <div>{component}</div>
        </div>
      </div>
    </div>
  );
};

export default SavingsOption;
