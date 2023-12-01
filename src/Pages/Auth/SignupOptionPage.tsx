import img from "../../assets/pay.png"
import img2 from "../../assets/bukky.png"
import img3 from "../../assets/staff.png"

const SignupOptionPage = () => {
    return (
        <div className="w-[100%] flex justify-center">
            <div className="w-[95%] flex items-center pt-[160px] pb-[160px] justify-between">
                <div className="w-[45%] flex flex-col items-center">
                    <img src={img} alt="" className="w-[190px]" />
                    <h3 className="font-[700] text-center text-[25px] w-[290px] mr-[30px] mt-[45px] text-[#888DF2]">
                        track your company's salary disbursment with easy
                    </h3>
                </div>

                <div className="w-[1px] h-[361px] bg-[#cacaca]"></div>

                <div className="w-[58%] flex flex-col items-center">
                    <p className="font-[500] text-[10px] text-[gray]">Let's Help you Get Started</p>
                    <div className="w-[550px] h-[120px] items-center bg-[#377dff] rounded-[10px] mt-[35px] overflow-hidden flex transition-all duration-350 hover:cursor-pointer hover:transform-scale-99 shadow-md border border-gray-200 p-4">

                        <h3 className="font-[700] text-[23px] mb-[10px] ml-[12px] text-[#fff] w-[35%]">Sign Up as a company</h3>
                        <img src={img2} alt="" className="h-[250%] object-fill w-[65%]"/>
                    </div>

                    <div className="w-[550px] h-[120px] items-center bg-[#8c0e0f] rounded-[10px] mt-[35px] overflow-hidden flex transition-all duration-350 hover:cursor-pointer hover:transform-scale-99 shadow-md border border-gray-200 p-4">

                        <h3 className="font-[700] text-[23px] mb-[10px] ml-[12px] text-[#fff] w-[35%]">Sign Up as a company's staff</h3>
                        <img src={img3} alt="" className="h-[250%] object-fill w-[65%]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupOptionPage