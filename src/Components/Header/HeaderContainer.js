import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthInfo, logout} from "../../Redux/Reducers/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthInfo();
    }

    render(){
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) =>{
    return {
        isAuth : state.auth.isAuth,
        login : state.auth.login,
    }
};
export  default connect(mapStateToProps, {getAuthInfo, logout})(HeaderContainer);