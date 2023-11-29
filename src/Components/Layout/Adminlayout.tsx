import { Outlet } from "react-router-dom"
import { Admindashboardhead, Adminsidebar } from ".."

const Adminlayout = () => {
  return (
    <div className="w-[100%] h-[100%] flex">
        <Admindashboardhead />
        <Adminsidebar />
        <div className="w-[100%] h-[100%] flex">
            <Outlet />
        </div>
    </div>
  )
}

export default Adminlayout