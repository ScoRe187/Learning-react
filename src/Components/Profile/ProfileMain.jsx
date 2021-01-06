import React from "react";
import s from "./ProfileMain.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsForm/ProfilePostsFormContainer";

const ProfileMain = (props) => {
  return (
    <div className={s.main}>
      <ProfileInfo />
      <ProfilePostsContainer />
    </div>
  );
};

export default ProfileMain;
