import React from "react";
import { PiImageSquareFill } from "react-icons/pi";

type iPhoto = {
  for_icon?: boolean;
  icon?: any;
  photo?: any;
  onclick?: () => void;
  size: number;
};

const Photo: React.FC<iPhoto> = ({ for_icon, icon, photo, onclick, size }) => {
  return (
    <>
      {for_icon ? (
        <div onClick={onclick} className="text-[20px] cursor-pointer">
          {icon}
        </div>
      ) : (
        <div
          onClick={onclick}
          style={{ width: `${size}px`, height: `${size}px` }}
          className="rounded-full bg-[lightgrey] flex justify-center items-center cursor-pointer overflow-hidden">
          {photo ? (
            <img
              src={photo}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <PiImageSquareFill
              style={{ fontSize: size > 24 ? "16px" : "" }}
              className="text-[var(--secondary-color)]"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Photo;
