
import { FC } from "react";
import { MdNotificationsActive } from "react-icons/md";

type headerdata = {
  title: string;
};

const Staffdashboardhead:FC<headerdata> = ({title}) => {


  return (
    <div className="w-full sticky border-b top-0 px-4 h-[10vh]  z-10 bg-indigo-500 flex items-center justify-between   max-md:m-auto">
      <h1 className="text-xl text-white font-semibold">{title}</h1>
      <div className="flex items-center gap-4">

      <p
        className="text-2xl text-[#9EA5AD] "
        // onClick={() => {
        //   setShow(!show);
        // }}
      >
        <MdNotificationsActive />
      </p>
     <div className="w-[50px] h-[50px] rounded-full border-white border-2 overflow-hidden">
      <img src="https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover" />
     </div>
      </div>


    </div>
  );
}

export default Staffdashboardhead