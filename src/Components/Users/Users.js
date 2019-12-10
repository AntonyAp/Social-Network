import React from 'react';
import css from './Users.module.css';
import {NavLink} from "react-router-dom";
import {usersApi} from "../../Api/Api";

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
                           src={u.photos.small != null ? u.photos.small : 'http://nbl.by/media/bearleague/bl15738316422784.jpg'}/>
                         </NavLink>
                    </div>
                    <div>
                       {u.followed ? <button onClick={() => {
                             usersApi.unfollow(u.id).then(
                                   data => {
                                       if(data.resultCode === 0){
                                           props.unfollow(u.id)
                                       }

                                   })
                           }}>Unfollow</button>
                           : <button onClick={() => {
                              usersApi.follow(u.id).then(
                                   data => {
                                       if(data.resultCode === 0){
                                           props.follow(u.id)
                                       }

                                   })
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