import React from 'react';
import {NavLink} from "react-router-dom";

let User = (props) => {
    return <div>
        {
             <div key={props.user.id}>
                <span>
                    <div>
                         <NavLink to={"/profile/" + props.user.id}>
                       <img
                           src={props.user.photos.small != null ? props.user.photos.small : 'http://nbl.by/media/bearleague/bl15724310211575.jpg'}/>
                         </NavLink>
                    </div>
                    <div>
                       {props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                               props.unfollow(props.user.id)

                           }}>Unfollow</button>
                           : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                               props.follow(props.user.id)
                           }}>Follow</button>}
                    </div>
                </span>
                <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{/*u.location.city*/}</div>
                    <div>{/*u.location.country*/}</div>
                </span>
            </span>
            </div>
        }
    </div>
}
export default User;