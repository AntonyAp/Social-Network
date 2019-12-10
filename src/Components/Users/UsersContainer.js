import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers, setUsersCount, toggleIsFetching,
    unfollow
} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {usersApi} from "../../Api/Api";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(false);
       usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(
            data => {
                this.props.toggleIsFetching(true);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            }
        );
    }

    onPageChanged = (currentPage) => {
        this.props.toggleIsFetching(false);
        this.props.setCurrentPage(currentPage);
        usersApi.getUsers(currentPage, this.props.pageSize).then(
            data =>{
                this.props.toggleIsFetching(true);
                this.props.setUsers(data.items);
            }
        )
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
        isFetching : state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setUsersCount,
    toggleIsFetching
})(UsersContainer);