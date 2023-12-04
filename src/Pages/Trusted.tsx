import img from "../assets/beta.png"
import img2 from "../assets/adanian.png"
import img3 from "../assets/mamamoni.jpg"

const Trusted = () => {
    return (
        <div className="w-[100%] flex justify-center">
            <div className="w-[95%] flex items-center pt-[60px] pb-[60px] justify-between">
                <h3 className="text-[32px] w-[350px]">Trusted by <span className="text-[green]">+100 </span>Leading Company
                </h3>

                <div className="flex items-center">
                    <img src={img}  className="h-[65px]"/>
                    <img src={img2}  className="h-[55px] ml-[37px]"/>
                    <img src={img3}  className="h-[55px] ml-[40px]"/>
                </div>
            </div>
        </div>
    )
}

export default Trusted