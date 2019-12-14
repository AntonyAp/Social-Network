import {Field, reduxForm} from "redux-form";
import React from "react";

const AddPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newPostText"} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

export default reduxForm({
    form: "addPostForm"
})(AddPostForm);