import { Outlet } from "react-router-dom"
import { Staffdashboardhead, Staffsidebar } from ".."

const Stafflayout = () => {
  return (
    <div className="flex">
     <div className="h-full sticky top-0 z-20">
     <Staffsidebar />
     </div>
        <div className="">
      
        <Staffdashboardhead title="Home"/>
    <div className="px-5 max-md:px-3 py-3">
    <Outlet />
    </div>
     
    </div>
    </div>
  )
}

export default Stafflayout