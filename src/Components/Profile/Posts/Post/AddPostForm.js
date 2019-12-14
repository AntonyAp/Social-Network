import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../Utils/Validators";
import {Textarea} from "../../../../Common/FormControls/FormControls";

let maxLength10 =  maxLengthCreator(10);
const AddPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} placeholder={"new post text"} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

export default reduxForm({
    form: "addPostForm"
})(AddPostForm);