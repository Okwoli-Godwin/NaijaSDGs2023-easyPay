import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX, BsLinkedin, BsInstagram   } from "react-icons/bs";

const Footer = () => {




    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="https://easy-pay-nine.vercel.app/static/media/logos2.38e5e17697002cb4dd35.png" className="w-32 py-2 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Simplifying payments and business growth
                </p>
            </div>
           
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2023 easyPay All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <FaFacebookF />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <BsTwitterX />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <BsLinkedin />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                            <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
   
        </footer>
    )
}



export default Footer