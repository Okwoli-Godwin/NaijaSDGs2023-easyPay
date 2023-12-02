import img from "../../../../assets/ai_prediction.png"
import robot from "../../../../assets/robot.png"

const FrequentSpend = () => {
    const options:any = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="mt-8 bg-white p-5">
        <p className="pb-3 text-sm text-gray-500">{formattedDate}</p>
   <p className="text-lg">    <strong> 🤖 AI: </strong> In the Past Months these are what you spent your income on...</p>

        <div className="w-[600px] max-md:w-full">
            <img src={img} alt="" className="object-contain" />
        </div>
        <div>
            <p className="text-lg"> <strong> 🤖 AI: </strong>From the chart above, you spent more of your income on internet services, remember you set a goal to accomplish?</p>
        </div>
        <div className="py-5">
            <p className="text-lg"> <strong> 🤖 AI: Advice </strong>I'd advice you cut down on your internet usuage, avoid unnessary streaming, this would help you save on internet purchases and add up to your savings.</p>
        </div>
        <div className="w-[500px] max-md:w-full">
            <img src={robot} alt="" className="object-contain" />
        </div>
       
        <div>
            <p className="text-lg"> <strong> 🤖 AI: </strong>Hopefully you heed my financial advice and make more of your income.</p>
        </div>
        
    </div>
  )
}

export default FrequentSpend