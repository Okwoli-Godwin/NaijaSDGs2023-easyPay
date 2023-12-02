import { Typewriter } from 'react-simple-typewriter';
import img from "../assets/skyscraper.jpeg"

const Hero = () => {
  return (
    <div className="w-[100%] flex bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${img})`}}>
        <div className="w-[100%] flex bg-[rgba(0,0,0,0.83)] pt-[180px] pb-[180px] justify-center">
          <div className="w-full flex flex-col items-center">
          <h1 className="text-[#fff] w-[600px] max-md:w-full text-[55px] max-md:text-[45px] font-semibold  text-center">Business Payments Made
            <span style={{color: "#716DF2", marginLeft: "15px"}}>
              <Typewriter
                words={['Easy', 'Simple', 'Safe']}
                loop
                cursor
                typeSpeed={500}
                delaySpeed={150}
              />
            </span>
          </h1>
          <p className="text-[#fff] w-[570px] max-md:w-[90%] text-center mt-[23px] text-[18px]">
            Get a unique bank account number that enables your company to pay
            employees' salaries through the wallet.
          </p>
           <button className="w-[220px] h-[45px] bg-indigo-600 rounded-[4px] flex justify-center items-center text-[#fff] mt-[40px]">
              Get Started
            </button>
          </div>
        </div>
    </div>
  )
}

export default Hero