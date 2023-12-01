import img from "../../assets/adminsignupimg.png"
import img2 from "../../assets/pay.png"

const AdminSignup = () => {
  return (
    <div className="w-[100%] flex justify-center">
        <div className="w-[100%] flex">
            <div className="w-[50%] h-[100%] border border-l">
                <img src={img} alt="" />
            </div>
            
            <div className="w-[50%] flex flex-col items-center pl-[40px] pr-[40px] pt-[40px] pb-[13px]">
                <img src={img2} alt="" className="w-[120px] "/>
                
                <h3 className="text-[25px] mt-[30px]">
                    Business Payments Made Simple.
                </h3>
                <p className="w-[480px] text-center mt-[20px]">Get a unique bank account number that  enables your company to pay   employees' salaries through the wallet.</p>
                
                <div className="w-[100%] flex flex-col mt-[40px]">
                    <h3>Company Name</h3>
                    <input type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] outline-none border border-gray-300" placeholder="my company"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Company Email</h3>
                    <input type="email" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="mycompany@gmail.com"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Admin Name</h3>
                    <input type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="my name"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Password</h3>
                    <input type="password" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="password"/>
                </div>
                <button className="w-[100%] h-[43px] bg-[#888DF2] rounded-[4px] flex justify-center items-center text-[#fff] mt-[25px]">
                    Sign Up
                </button>
                <h4 className="mt-[10px]">Already have an account? <span className="text-[#716DF2]">Sign in instaed</span></h4>
            </div>
        </div>
    </div>
  )
}

export default AdminSignup