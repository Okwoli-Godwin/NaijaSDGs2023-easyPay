import {Outlet} from "react-router-dom"
import { Footer, Header } from "../Static"

const Homelayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Homelayout