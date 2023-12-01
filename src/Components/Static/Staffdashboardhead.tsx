
import { LiaUserCircle } from "react-icons/lia";
import { FC, useState } from "react";

type headerdata = {
  title: string;
};

const Staffdashboardhead:FC<headerdata> = ({title}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full sticky top-0 px-4 h-[10vh]  z-10 bg-white flex items-center justify-between  max-md:w-[90%] max-md:m-auto">
      <h1 className="text-lg text-slate-400 font-medium">{title}</h1>
      <p
        className="text-4xl text-[#9EA5AD] "
        onClick={() => {
          setShow(!show);
        }}
      >
        <LiaUserCircle />
      </p>


    </div>
  );
}

export default Staffdashboardhead