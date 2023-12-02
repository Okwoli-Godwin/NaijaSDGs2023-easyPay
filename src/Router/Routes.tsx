import { createBrowserRouter } from "react-router-dom";
import { Adminlayout, Homelayout } from "../Components";
import Homepage from "../Pages/Homepage";
import Home from "../Pages/Admindashboardpage/Home";
import Stafflayout from "../Components/Layout/Stafflayout";
import Staffhome from "../Pages/Staffdashboardpage/Staffhome";
import TransactionHistory from "../Pages/Admindashboardpage/TransactionHistory";
import SignupOptionPage from "../Pages/Auth/SignupOptionPage";
import SigninOptionPage from "../Pages/Auth/SigninOptionPage";
import AdminSignup from "../Pages/Auth/AdminSignup";
import StaffSignup from "../Pages/Auth/StaffSignup";
import AdminLogin from "../Pages/Auth/AdminLogin";
import StaffLogin from "../Pages/Auth/StaffLogin";
import Savings from "../Pages/Staffdashboardpage/Savings";
import Staffs from "../Pages/Admindashboardpage/Staffs";
import AminSavings from "../Pages/Admindashboardpage/aminSavings";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "staffs",
        element: <Staffs />,
      },
      {
        path: "payments",
        element: <div>Payments</div>,
      },
      {
        path: "savings",
        element: <AminSavings />,
      },
      {
        path: "financials",
        element: <div>Financials</div>,
      },
      {
        path: "transaction-history",
        element: <TransactionHistory />,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
  {
    path: "/staff",
    element: <Stafflayout />,
    children: [
      {
        index: true,
        element: <Staffhome />,
      },
      {
        path: "savings",
        element: <Savings />,
      },
    ],
  },
  {
    path: "/signupoption",
    element: <SignupOptionPage />,
  },
  {
    path: "/signinoption",
    element: <SigninOptionPage />,
  },
  {
    path: "/companysignup",
    element: <AdminSignup />,
  },
  {
    path: "/staffsignup",
    element: <StaffSignup />,
  },
  {
    path: "/companysignin",
    element: <AdminLogin />,
  },
  {
    path: "/stafflogin",
    element: <StaffLogin />,
  },
]);
