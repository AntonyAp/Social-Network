import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setUsers, setUsersCount, toggleIsFetching, toggleIsFollowingInProgress,
    unfollow
} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
      this.props.getUsersThunkCreator( this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null }
            <Users pageSize = {this.props.pageSize}
                      users = {this.props.users}
                      currentPage = {this.props.currentPage}
                      usersCount = {this.props.usersCount}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      onPageChanged = {this.onPageChanged}
                      toggleIsFollowingInProgress = {this.props.toggleIsFollowingInProgress}
                      followingInProgress = {this.props.followingInProgress}

        />
        </>
    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.usersList,
        pageSize : state.usersPage.pageSize,
        usersCount : state.usersPage.usersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching,
    toggleIsFollowingInProgress,
    getUsersThunkCreator
})(UsersContainer);