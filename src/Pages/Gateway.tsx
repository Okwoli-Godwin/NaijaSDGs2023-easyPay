
import { AiFillCheckSquare } from "react-icons/ai";
import { IoMdAperture } from "react-icons/io";
import { FiGitPullRequest, FiLoader } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import demopic from "../assets/gateway.png"

const Gateway = () => {
  return (
    <div className="w-full h-screen bg-aacbeb87 flex justify-center items-center my-100 md:my-0">
      <div className="w-90 h-95 flex justify-between items-center md:flex-col">
        <div className="w-45 h-full flex flex-col justify-center md:w-90 md:h-auto">
          <h1 className="text-45px text-21212d">Effortless Payment Solutions for Your Business</h1>
          <p className="text-500" style={{ color: "#363636" }}>
            Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum
            sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis.
          </p>
          <div className="flex flex-col space-between my-20">
            <div className="flex items-center">
              <AiFillCheckSquare className="text-ff0099 bg-white" />
              <span className="font-bold ml-8">Comprehensive Financial Planning</span>
            </div>
            <div className="flex items-center">
              <AiFillCheckSquare className="text-21212d bg-white" />
              <span className="font-bold ml-8">Personalized Approach</span>
            </div>
            <div className="flex items-center">
              <AiFillCheckSquare className="text-ff0099 bg-white" />
              <span className="font-bold ml-8">Investment Management</span>
            </div>
          </div>
          <button className="w-180px py-15px border-none bg-0073ff border-radius-6px text-15px text-white font-bold hover:text-white transition-1s transform hover:scale-105 hover:bg-ff0099">
            About us
          </button>
        </div>
        <div className="w-50 h-90 flex flex-col justify-end md:w-90 md:h-500 md:h-auto lg:w-full lg:h-300px">
          <div className="w-55 h-50 flex flex-col space-between mt-30 md:h-60 md:w-full lg:h-60">
            <div className="w-full h-30 flex justify-end items-center">
              <div className="w-70 h-75 flex justify-around items-center bg-0073ff border-radius-1rem p-5px transition-1s text-white hover:mr-13px">
                <IoMdAperture />
                <span>Platform Payment</span>
              </div>
            </div>
            <div className="w-full h-30 flex justify-center items-center">
              <div className="w-70 h-75 flex justify-around items-center bg-0073ff border-radius-1rem p-5px transition-1s text-white hover:mr-13px">
                <FiGitPullRequest />
                <span>Platform Payment</span>
              </div>
            </div>
            <div className="w-full h-30 flex justify-start items-center">
              <div className="w-70 h-75 flex justify-around items-center bg-0073ff border-radius-1rem p-5px transition-1s text-white hover:mr-13px">
                <FiLoader />
                <span>Platform Payment</span>
              </div>
            </div>
          </div>
          <div className="w-full h-40 mt-30 md:h-50 lg:h-90 flex items-center">
            <div className="w-full h-60 bg-gradient-to-r from-0073ff to-ff0099 border-radius-1rem p-0 pl-25px flex justify-start items-center md:h-90">
              <div className="w-90px h-90px bg-ff0099 flex justify-center items-center border-radius-1rem text-25px text-white">
                <FaPlay />
              </div>
              <div className="ml-10 color-white">
                <h3>Play Our Demo</h3>
                <span>Phasellus viverra nulla ut.</span>
              </div>
            </div>
            <img
              className="absolute right-60 md:w-200px md:mb-198px lg:w-300px lg:right-0 lg:relative"
              src={demopic}
              alt="demo_hero_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
