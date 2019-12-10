import React from 'react';
import cl from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <img className={cl.img} src="http://ushki-ruchki.ru/uploads/images/s/a/s/sasha_gray_sweet_game.jpg"/>
            <div>
                <img src={props.profile.photos.small}/>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;