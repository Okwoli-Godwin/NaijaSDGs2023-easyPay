import { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [state, setState] = useState(false);



  return (
    <nav className="bg-white border-b sticky top-0 z-20 py-2 w-full md:text-sm md:border-none ">
      <div className="items-center px-4 max-w-screen mx-auto md:flex md:px-16">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#">
            <img src="https://easy-pay-nine.vercel.app/static/media/logos2.38e5e17697002cb4dd35.png" width={100} height={50} alt="TWMA logo" />
            {/* <h1 className="text-2xl text-[#FFA500] font-bold">TWMA</h1> */}
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center  space-y-6 md:flex md:space-x-6 md:space-y-0">
           
            <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <NavLink to="signinoption">
                <a
                 
                  className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                >
                  Log in
                </a>
                </NavLink>
              </li>
              <li>
               <NavLink to="signupoption">
               <a
                 
                  className="block py-3 px-4 font-medium text-center text-white bg-indigo-600  hover:text-white active:bg-indigo-600 active:shadow-none rounded-lg shadow md:inline"
                >
                  Get started
                </a>
               </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;