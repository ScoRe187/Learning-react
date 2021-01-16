import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({ isAuth, login }) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img
          src="https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png"
          alt=""
        />
        <div className={s.UserNAuth}>
          {isAuth ? login : <NavLink to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
