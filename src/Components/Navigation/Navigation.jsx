import React from "react";
import s from "./Navigation.module.css";
import NaviLink from "./NaviLink/NaviLink";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NaviLink link="profile" />
      <NaviLink link="messages" />
      <NaviLink link="friends" />
      <NaviLink link="music" />
      <NaviLink link="news" />
      <NaviLink link="settings" />
    </nav>
  );
};

export default Navigation;
