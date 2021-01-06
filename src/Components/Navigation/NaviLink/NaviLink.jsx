import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NaviLink.module.css";

const NaviLink = (props) => {
  const link = props.link;
  const firstLetterCaps = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  // {`/${link}`}
  return (
    <NavLink to={`/${link}`} activeClassName={s.active}>
      <div className={`${s.nav__linkBlock}`}>
        <span>{firstLetterCaps(link)}</span>
      </div>
    </NavLink>
  );
};

export default NaviLink;
