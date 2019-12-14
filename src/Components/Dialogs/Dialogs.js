import React from "react";
import cl from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import SendMessageForm from "./SendMessageForm";

const Dialogs = (props) => {
    let mappedDialogs = props.dialogsPage.dialogsList.map((d) => <Dialog name={d.name} id={d.id}/>);
    let mappedMessages = props.dialogsPage.messageList.map(m => <Message id = {m.id} messageText = {m.text} />);

    let sendMessage = (formData) =>{
        props.sendMessage(formData.newMessageText);
    };

return <div>
    <div className={cl.dialogs}>
        <div className={cl.dialogItems}>
            {mappedDialogs}
        </div>
        <div className={cl.messages}>
            <div>{mappedMessages}</div>
            <div>
                <SendMessageForm onSubmit={sendMessage} />
           </div>
        </div>
    </div>
</div>
};

export default Dialogs;