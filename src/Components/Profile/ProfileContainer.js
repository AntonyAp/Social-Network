import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/Reducers/ProfileReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hocs/WithAuthRedirect";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
    })
};

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)