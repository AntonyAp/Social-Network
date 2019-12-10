import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/Reducers/AuthReducer";
import {usersApi} from "../../Api/Api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersApi.getAuthInfo().then(
            data => {
                if(data.resultCode === 0){
                    this.props.setAuthUserData(data.data);
                }

            })
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) =>{
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login
    }
};
export  default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);