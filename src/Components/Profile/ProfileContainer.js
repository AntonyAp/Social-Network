import React from "react";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../Redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hocs/WithAuthRedirect";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            if(this.props.isAuth){
            userId = this.props.id;
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status : state.profilePage.status,
        userId : state.auth.id,
        isAuth : state.active.isAuth
    })
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)