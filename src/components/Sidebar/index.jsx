import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarRoutes} from "../../routes";
import "./style.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__links">
                {SidebarRoutes.map(({ id, name, path, icon }) => (
                    <NavLink className={route => route.isActive ? "sidebar__link active__link flex" : "sidebar__link flex"} to={path} key={id}>
                        <span>{icon}</span><p>{name}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
