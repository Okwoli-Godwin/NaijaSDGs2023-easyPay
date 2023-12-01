import { IoMdCloseCircle } from "react-icons/io";

const Bills = ({ isOpen, onClose, children }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end ">
      <div
        className="fixed inset-0 bg-[#0000008f]"
        onClick={onClose}
      ></div>
      <div className="bg-white h-full w-[450px] max-md:w-full p-8  rounded shadow-lg z-10">
      <button
          className="text-2xl"
          onClick={onClose}
        >
          <IoMdCloseCircle/>
        </button>
        {children}
      
      </div>
    </div>
  );
};

export default Bills;
