import { createBrowserRouter } from "react-router-dom";
import { Adminlayout, Homelayout } from "../Components";
import Homepage from "../Pages/Homepage";
import Home from "../Pages/Admindashboardpage/Home";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children: [{
            index: true,
            element: <Homepage />
        }]
    },
    {
        path: "/admin",
        element: <Adminlayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
])