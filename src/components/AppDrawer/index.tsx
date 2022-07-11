import React, { ReactNode } from "react";
import "./AppDrawer.css";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    name: "Zadání",
    url: "/",
  },
  {
    name: "Epizody",
    url: "/episodes",
  },
  {
    name: "Postavy",
    url: "/characters",
  },
];

interface AppDrawerInterface {
  children: ReactNode;
}

const AppDrawer = ({ children }: AppDrawerInterface) => {
  return (
    <div>
      <div className="navbar_container">
        {navigation.map((nav) => (
          <NavLink
            key={nav.name}
            to={nav.url}
            className="navbar_item"
            style={({ isActive }) => ({
              background: isActive ? "blue" : "green",
            })}
          >
            <div className="navbar_item_link">{nav.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AppDrawer;
