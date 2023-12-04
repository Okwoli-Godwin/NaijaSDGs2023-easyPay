import React from 'react'


interface btnData{
    onclick: ()=>void;
    icon: any;
    text: string;
}

const Button:React.FC<btnData> = ({onclick, icon, text}) => {
  return (
    <button onClick={onclick} className="bg-indigo-100 hover:bg-indigo-50 transition-all ease-in duration-150 h-[13rem] w-[20rem] max-md:w-full max-lg:w-[80%] rounded-2xl shadow flex flex-col justify-center items-center">
    <p className="text-3xl text-indigo-600">
   {icon}
    </p>
    <p className="text-lg mt-2">{text}</p>
  </button>
  )
}

export default Button