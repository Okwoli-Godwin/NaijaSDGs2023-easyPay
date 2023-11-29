

const Hero = () => {
  return (
    <div className="w-[100%] flex bg-hero bg-center bg-cover bg-no-repeat">
        <div className="w-[100%] flex bg-[rgba(0,0,0,0.6)] pt-[180px] pb-[180px] justify-center">
          <div className="w-[95%] flex flex-col items-center">
          <h1 className="text-[#fff] text-[55px] w-[450px] text-center">Business Payments Made Simple</h1>
          <p className="text-[#fff] w-[570px] text-center mt-[23px] text-[18px]">
            Get a unique bank account number that enables your company to pay
            employees' salaries through the wallet.
          </p>
           <button className="w-[220px] h-[45px] bg-[#0B73F7] rounded-[4px] flex justify-center items-center text-[#fff] mt-[40px]">
              Get Started
            </button>
          </div>
        </div>
    </div>
  )
}

export default Hero