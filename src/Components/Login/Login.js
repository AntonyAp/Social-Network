import React from 'react'
import LoginForm from "./LoginForm";
import {login} from "../../Redux/Reducers/AuthReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) =>{
       props.login(formData.login, formData.password, formData.rememberMe)
    };
    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);