import React from "react";
import cl from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Content = (props) => {
    return <div >
        <ProfileInfo/>
        <PostsContainer/>
    </div>
};

export default Content;