import React from "react";
import s from "./ProfileMain.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "./../SubComponents/Preloader";
import ProfilePosts from "./ProfilePosts/ProfilePostsForm/ProfilePosts";

const Profile = ({ posts, newPostText, profile, addPost, onPostChange }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.main}>
      <ProfileInfo profile={profile} />
      <ProfilePosts
        posts={posts}
        addPost={addPost}
        onPostChange={onPostChange}
        newPostText={newPostText}
      />
    </div>
  );
};

export default Profile;
