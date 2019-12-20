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
            <div>
                <img src={props.profile.photos.small}/>
                <ProfileStatus {...props} />
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;