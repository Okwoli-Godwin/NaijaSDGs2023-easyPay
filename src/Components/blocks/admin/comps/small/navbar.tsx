import React from "react";
import { NavLink } from "react-router-dom";

type iNavBar = {
  icon: any;
  page: string;
  path: string;
  is_active: boolean;
  dektop_only?: boolean;
  only_icons?: boolean;
  onclick?: () => void;
};

const NavBar: React.FC<iNavBar> = ({
  icon,
  page,
  path,
  is_active,
  dektop_only,
  onclick,
  only_icons,
}) => {
  return (
    <NavLink
      onClick={onclick}
      style={{ textDecoration: "none" }}
      className={`min-[800px]:hover:text-[var(--primary-color)] ${
        dektop_only ? `max-[800px]:hidden` : ``
      } hover:text-[var(--secondary-color)] max-[800px]:rounded-none transition-all duration-[.4s] min-[800px]:hover:bg-[var(--accent-color-lite)] rounded-[3px] overflow-hidden`}
      to={path}>
      <nav
        className={`max-[800px]:justify-center ${
          is_active ? `text-[var(--accent-color)]` : ``
        } w-full h-full flex items-center ${
          is_active
            ? `bg-[var(--primary-color)] max-[800px]:bg-[transparent]`
            : `bg-[transparent]`
        }`}>
        <div className="ml-[15px] max-[800px]:ml-0 flex max-[800px]:flex-col max-[800px]:gap-0 max-[800px]:justify-center max-[800px]:h-full items-center gap-[10px]">
          <div className="text-[19px] max-[800px]:text-[24px]">{icon}</div>
          {!only_icons && (
            <div className="font-medium text-[12px] max-[800px]:text-[9px]">
              {page}
            </div>
          )}
        </div>
      </nav>
    </NavLink>
  );
};

export default NavBar;
