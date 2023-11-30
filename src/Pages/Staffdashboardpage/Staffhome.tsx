import StaffHeader from "../../Components/blocks/admin/StaffHeader"
import StaffBody from "./StaffBody"


const Staffhome = () => {
  return (
    <div className="w-full min-h-screen h-full bg-slate-300">
      <StaffHeader/>
      <StaffBody/>
    </div>
  )
}

export default Staffhome