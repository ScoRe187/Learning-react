import React from "react";
import s from "./ProfileMain.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "./../SubComponents/Preloader";
import ProfilePosts from "./ProfilePosts/ProfilePostsForm/ProfilePosts";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.main}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <ProfilePosts
        posts={props.posts}
        addPost={props.addPost}
        onPostChange={props.onPostChange}
        newPostText={props.newPostText}
      />
    </div>
  );
};

export default Profile;
