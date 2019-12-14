import {Field, reduxForm} from "redux-form";
import React from "react";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
        <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
        <div><Field type = {'checkbox'} name={'rememberMe'} component={'input'}/>
            remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

export default reduxForm({form : "login"})(LoginForm);