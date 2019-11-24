import React from "react";
import cl from './Post.module.css';
const Post = (props) => {
    return <div className={cl.item}>
        <img src= 'https://wolf.ua/images/-YoQthTAHNiNqDbhSxyEQd_tUhn1RoMiqmjPzfFRBh-IdSBNMvu4pnpohkRimWu2e1nPNCGA6frSzZfv1S6tJxoxUa5AZNO_dYRou2uPwO5Lh0PbGpnmoJEsJ9uNm6vnNE73SwxhsBoYUH8PKuy-9u8H5qZxERk9oxIvapVuc3E='></img>
        {props.message}
    </div>
}

export default Post;