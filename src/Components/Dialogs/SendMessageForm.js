import {Field, reduxForm} from "redux-form";
import React from "react";

const SendMessageForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your message"} />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
};

export default reduxForm({
    form: "addMessageForm"
})(SendMessageForm);