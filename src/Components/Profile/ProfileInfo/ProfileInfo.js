import React from 'react';
import cl from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<img className={cl.img} src="http://ushki-ruchki.ru/uploads/images/s/a/s/sasha_gray_sweet_game.jpg"/>*/}
            <div>
                <img src={props.profile.photos.small}/>
                <ProfileStatus status={"hello"} />
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;