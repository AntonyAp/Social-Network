import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validators";

let maxLength100 =  maxLengthCreator(100);
const SendMessageForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newMessageText"} placeholder={"Enter your message"} validate={[required, maxLength100]} />
        </div>
        <div>
            <button>Send message</button>
        </div>
    </form>
};

export default reduxForm({
    form: "addMessageForm"
})(SendMessageForm);