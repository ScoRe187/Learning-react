import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.UserInfo}>
      <div className={s.UserInfo__Image}>
        <img src="https://i.stack.imgur.com/V7ZYG.png?s=328&g=1" alt="" />
      </div>
      <div className={s.UserInfo__Information}></div>
    </div>
  );
};

export default ProfileInfo;
