import { FC } from "react"


interface favData {
    img: string
    username: string
}

const Favourites:FC<favData> = ({img, username}) => {
  return (
 

<div className="w-full flex items-center gap-4 border rounded-lg py-3 px-4 bg-white shadow-md">
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={img} alt="" className="object-cover" />
        </div>
        <p>{username}</p>

      </div>

  )
}

export default Favourites