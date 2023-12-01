import { FC } from "react"

interface cardData{
    title: string;
    figure: string;
    bottomText: string;
    figureColor: string;
}


const Cards:FC<cardData> = ({title, figure, bottomText, figureColor}) => {
  return (
    <div className='h-[180px] relative bg-white shadow rounded-2xl p-5'>
        {/*title  */}
        <h2 className="font-semibold">{title}</h2>
        <h1 className={`mt-5 text-4xl max-lg:text-2xl max-md:text-xl font-semibold tracking-wide ${figureColor}`}>{figure}</h1>
        <p className="absolute bottom-4 ">{bottomText}</p>
    </div>
  )
}

export default Cards