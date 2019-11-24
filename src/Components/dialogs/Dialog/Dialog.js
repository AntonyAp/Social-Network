import cl from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = (props) => {
    return <div className={cl.dialog}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
};
export default  Dialog;