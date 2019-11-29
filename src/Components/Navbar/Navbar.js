import React from "react";
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <ul className={cl.navLinks}>
                <li>
                    <NavLink to="/dialogs" activeClassName={cl.active}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName={cl.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={cl.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={cl.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeClassName={cl.active}>Users</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;