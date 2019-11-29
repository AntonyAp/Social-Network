import React from "react";
import cl from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let mappedDialogs = props.dialogsPage.dialogsList.map((d) => <Dialog name={d.name} id={d.id}/>);
    let mappedMessages = props.dialogsPage.messageList.map(m => <Message id = {m.id} messageText = {m.text} />);
    let sendMessage = () =>{
        props.sendMessage();
    };
    let onMessageTextChange = (e) =>{
        let messageBody = e.target.value;
        props.onMessageTextChange(messageBody);
    };
return <div>
    <div className={cl.dialogs}>
        <div className={cl.dialogItems}>
            {mappedDialogs}
        </div>
        <div className={cl.messages}>
            <div>{mappedMessages}</div>
            <div>
                <div>
                    <textarea value = {props.dialogsPage.newMessageText} onChange={onMessageTextChange} placeholder={""}/>
                </div>
                <div>
                    <button onClick = {sendMessage}>Send message</button>
                </div>
           </div>
        </div>
    </div>
</div>
};

export default Dialogs;