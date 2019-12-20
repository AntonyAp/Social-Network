import {Field, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../Utils/Validators";
import css from "../../Common/FormControls/FormControls.module.css"

const maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Login'} name={'login'} component={Input} validate={[required, maxLength30]}/></div>
        <div><Field placeholder={'Password'} name={'password'} type={"password"} component={Input}
                    validate={[required, maxLength30]}/></div>
        <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/>
            remember me
        </div>
        <div>
            {(props.error) && <div className={css.formSummaryError}>Wrong email or password</div>}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

export default reduxForm({form: "login"})(LoginForm);