import img from "../../assets/pay.png"

const SignupOptionPage = () => {
    return (
        <div className="w-[100%] flex justify-center">
            <div className="w-[85%] flex items-center pt-[160px] pb-[160px]">
                <div className="w-[45%] flex flex-col items-center">
                    <img src={img} alt="" className="w-[190px]" />
                    <h3 className="text-center text-[25px] w-[290px] mr-[30px] mt-[45px] text-[#888DF2]">
                        track your company's salary disbursment with easy
                    </h3>
                </div>

                <div className="w-[1px] h-[361px] bg-[#cacaca]"></div>
            </div>
        </div>
    )
}

export default SignupOptionPage