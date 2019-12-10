import cl from './../Dialogs.module.css';
import React from "react";

const Message = (props) => {
    return <div className={cl.message}>{props.messageText}</div>
};

export default Message;

