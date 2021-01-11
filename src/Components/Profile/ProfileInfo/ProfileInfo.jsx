import React from "react";
import s from "./ProfileInfo.module.css";

// "https://i.stack.imgur.com/V7ZYG.png?s=328&g=1"

const ProfileInfo = (props) => {
  return (
    <div className={s.UserInfo}>
      <div className={s.UserInfo__Image}>
        <img
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : "https://www.clipartmax.com/png/full/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
          }
          alt=""
        />
      </div>
      <div className={s.UserInfo__Information}>
        <span className={s.ProfileName}>{props.profile.fullName}</span>
        <span className={s.ProfileStatus}>{props.profile.aboutMe}</span>
        <span className={s.ProfileContacts}>
          Contacts: <br />
          <span className={s.ProfileContacts__Info}>
            Facebook: {props.profile.contacts.facebook}
            <br />
            VK: {props.profile.contacts.vk}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProfileInfo;
