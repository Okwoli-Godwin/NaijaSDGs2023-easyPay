import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Effortless = () => {
    return (
        <div className="w-[100%] flex justify-center bg-[#A0B4F2] pt-[40px] pb-[40px]">
            <div className="w-[95%] flex items-center justify-between">
                <div className="w-[40%] flex flex-col">
                    <h1 className="text-[40px] font-[500] w-[500px]">Effortless Payment Solution for Your Business</h1>
                    <p className="mt-[20px]">Using easyPay is fast & reliable way to send money to multiple people. Payments happen at the push of a button after putting in the account numbers of individuals.
                    </p>
                    <div className="flex items-center mt-[25px]">
                        <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#fff] rounded-[100px] text-[14px] text-[#716DF2]">
                            <IoCheckmarkDoneSharp />
                        </div>
                        <h3 className="ml-[20px]">Comprehensive Financial Planning</h3>
                    </div>
                    <div className="flex items-center mt-[18px]">
                        <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#fff] rounded-[100px] text-[14px] text-[#716DF2]">
                            <IoCheckmarkDoneSharp />
                        </div>
                        <h3 className="ml-[20px]">Personalized Approach</h3>
                    </div>
                    <div className="flex items-center mt-[18px]">
                        <div className="w-[20px] h-[20px] flex justify-center items-center bg-[#fff] rounded-[100px] text-[14px] text-[#716DF2]">
                            <IoCheckmarkDoneSharp />
                        </div>
                        <h3 className="ml-[20px]">Investment Management</h3>
                    </div>

                    <button className="w-[180px] h-[40px] bg-[#E1E1E1] rounded-[4px] flex justify-center items-center  text-[#716DF2] mt-[30px]">
                      About Us
                  </button>
                </div>

                <div className="w-[58%] flex">

                </div>
            </div>
        </div>
    )
}

export default Effortless