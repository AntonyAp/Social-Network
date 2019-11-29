import React from 'react';
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={cl.img} src="http://ushki-ruchki.ru/uploads/images/s/a/s/sasha_gray_sweet_game.jpg"></img>
            <div>ava + desc</div>
        </div>
    )
};

export default ProfileInfo;