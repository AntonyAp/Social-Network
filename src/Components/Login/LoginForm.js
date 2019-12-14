import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validators";

const maxLength10 = maxLengthCreator(10);
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength10]}/></div>
        <div><Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength10]}/></div>
        <div><Field type = {'checkbox'} name={'rememberMe'} component={Input}/>
            remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

export default reduxForm({form : "login"})(LoginForm);