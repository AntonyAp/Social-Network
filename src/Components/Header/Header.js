import React from "react";
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={cl.header}>
        <div className={cl.loginBlock}>
            {props.isAuth ?
                "Hello " + props.login :
                <NavLink to={"/login"}>Login</NavLink>
            }
        </div>
    </header>
};

export default Header;