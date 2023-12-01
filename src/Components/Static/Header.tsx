import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [scroll, setScroll] = useState(false)

    const changeHeaderColor = () => {
        if (window.scrollY >= 70) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener("scroll", changeHeaderColor);
    return (
      <>
        {scroll ? (
            <div className="w-[100%] h-[80px] flex justify-center fixed bg-[#716DF2] z-10">
          <div className="w-[95%] flex items-center justify-between ">
              <h3 className="text-[37px] text-[#fff]">easyPay</h3>

              <div className="flex items-center text-[#fff]">
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">Home</h4>
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">About</h4>
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">Features</h4>
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">Contact</h4>

                  <button className="w-[120px] h-[40px] bg-[#E1E1E1] rounded-[4px] flex justify-center items-center text-[#716DF2]">
                      Login
                  </button>
                  <button className="w-[140px] h-[40px] bg-[#E1E1E1] rounded-[4px] flex justify-center items-center ml-[15px] text-[#716DF2]">
                      Get Started
                  </button>
              </div>
          </div>
    </div>
        ) : (
            <div className="w-[100%] h-[80px] flex justify-center fixed bg-transparent z-10">
          <div className="w-[95%] flex items-center justify-between ">
              <h3 className="text-[37px] text-[#fff]">easyPay</h3>

              <div className="flex items-center text-[#fff]">
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">Home</h4>
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">About</h4>
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">Features</h4>
                  <h4 className="text-[18px] mr-[40px] cursor-pointer">Contact</h4>

                  <button className="w-[120px] h-[40px] bg-[#E1E1E1] rounded-[4px] flex justify-center items-center text-[#0B73F7]">
                      Login
                  </button>
                  <NavLink to="/signupoption">
                    <button className="w-[140px] h-[40px] bg-[#888DF2] rounded-[4px] flex justify-center items-center ml-[15px]">
                      Get Started
                  </button>
                  </NavLink>
              </div>
          </div>
    </div>
        )}
      </>
  )
}

export default Header