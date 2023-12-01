import img from "../../assets/adminsignupimg.png"
import img2 from "../../assets/pay.png"

const AdminSignup = () => {
  return (
    <div className="w-[100%] flex justify-center">
        <div className="w-[100%] flex">
            <div className="w-[50%] h-[100%] border border-l">
                <img src={img} alt="" />
            </div>
            
            <div className="w-[50%] flex flex-col items-center pl-[10px] pr-[10px] pt-[40px] bg-[red]">
                <img src={img2} alt="" className="w-[120px] "/>
                
                <h3 className="text-[25px] mt-[30px]">
                    Business Payments Made Simple.
                </h3>
                <p className="w-[380px] text-center mt-[20px]">Get a unique bank account number that  enables your company to pay   employees' salaries through the wallet.</p>
            </div>
        </div>
    </div>
  )
}

export default AdminSignup