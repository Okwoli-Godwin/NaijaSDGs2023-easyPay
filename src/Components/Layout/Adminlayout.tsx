//This is a 'dropping component' for arranging the overall/general layout/view of all of the pages
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Admindashboardhead, Adminsidebar } from "..";

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* this piece of layout is for the desktop screens... and also tablets 🤷‍♂️ */}
      <div className="w-full h-screen relative flex max-[800px]:hidden">
        {/* navigator goes here... */}
        <div className="w-64 h-full sticky top-0 left-0">
          <Adminsidebar />
        </div>
        <div className="flex-1 h-full relative overflow-x-hidden">
          {/* header goes here... */}
          <div className="w-full h-[70px] sticky z-[2] top-0 right-0 bg-[var(--primary-color)]">
            <Admindashboardhead />
          </div>
          {/* and the pages go here... */}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      {/* this piece of layout is for mobile screens */}
      <div className="hidden max-[800px]:block h-screen w-full">
        {/* header goes here... */}
        <div className="sticky z-[2] top-0 left-0 h-[48px] w-full bg-[var(--primary-color)]">
          <Admindashboardhead />
        </div>
        {/* pages go here... */}
        <div>
          <Outlet />
        </div>
        {/*and the navigator goes down here... had to restrict it for certain pages though*/}
        {location.pathname.includes("staffs") === false &&
          location.pathname.includes("payments") === false &&
          location.pathname.includes("notifications") === false &&
          location.pathname.includes("settings") === false && (
            <div className="fixed bottom-0 left-0 h-[56px] flex items-center w-full border-t-[1px]">
              <Adminsidebar />
            </div>
          )}
      </div>
    </>
  );
};

export default Layout;
