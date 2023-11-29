import { Outlet } from "react-router-dom"
import { Staffdashboardhead, Staffsidebar } from ".."

const Stafflayout = () => {
  return (
    <div>
        <div className="w-[100%] h-[100%] flex">
        <Staffdashboardhead />
        <Staffsidebar />
        <div className="w-[100%] h-[100%] flex">
            <Outlet />
        </div>
    </div>
    </div>
  )
}

export default Stafflayout