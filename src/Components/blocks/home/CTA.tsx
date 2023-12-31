import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA:React.FC = () => {

        return (
            <section className="relative overflow-hidden py-36 px-4 bg-gray-900 md:px-8">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
                <div className="max-w-xl mx-auto text-center relative">
                    <div className="py-4">
                        <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                            Empower your business with us
                        </h3>
                        <p className="text-gray-300 leading-relaxed mt-3">
                        We are dedicated to providing you with the best experience. We provide innovative and friendly solutions for businesses whether big or small.
                        </p>
                    </div>
                    <div className="mt-5 items-center justify-center gap-3 sm:flex">
                       <NavLink to="signupoption">
                       <button 
                            
                            className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                        >
                            Try It Out
                        </button>
                       </NavLink>
                      <NavLink to="signupoption">
                      <button
                            
                            className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                        >
                            Get Started
                        </button>
                      </NavLink>
                    </div>
                </div>
            </section>
        )
    
    
}

export default CTA