import React from 'react';
import css from './Users.module.css';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {
                pages.map(page => {
                    return <span onClick={() => props.onPageChanged(page)}
                                 className={props.currentPage === page && css.selectedPage}>{page}</span>;
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                         <NavLink to={"/profile/" + u.id}>
                       <img
                           src={u.photos.small != null ? u.photos.small : 'http://nbl.by/media/bearleague/bl15724310211575.jpg'}/>
                         </NavLink>
                    </div>
                    <div>
                       {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                              props.unfollow(u.id)

                           }}>Unfollow</button>
                           : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                              props.follow(u.id)
                           }}>Follow</button>}
                    </div>
                </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{/*u.location.city*/}</div>
                    <div>{/*u.location.country*/}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}
export default Users;