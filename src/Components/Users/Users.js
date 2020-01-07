import React from 'react';
import User from "./User";
import Paginator from "../../Common/Paginator/Paginator";

let Users = (props) => {

    return <div>
        <div>
                <Paginator totalItemsCount={props.usersCount} currentPage={props.currentPage} pageSize={props.pageSize}
                           onPageChange={props.onPageChanged}/>
        </div>
        {
            props.users.map(u =>
                <User key={u.id}
                      user={u}
                      followingInProgress={props.followingInProgress}
                      follow={props.follow}
                      unfollow={props.unfollow}/>)
        }
    </div>
}
export default Users;