import { FC } from "react"

interface cardData{
    title: string;
    figure: string;
    bottomText: string;
    figureColor: string;
}


const Cards:FC<cardData> = ({title, figure, bottomText, figureColor}) => {
  return (
    <div className='h-[170px] relative bg-white shadow rounded-2xl p-5'>
        {/*title  */}
        <h2 className="font-semibold">{title}</h2>
        <h1 className={`mt-5 text-2xl max-lg max-md:text-xl font-semibold tracking-wide ${figureColor}`}>{figure}</h1>
        <p className="absolute bottom-4 ">{bottomText}</p>
    </div>
  )
}

export default Cards