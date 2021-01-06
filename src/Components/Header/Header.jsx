import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <img
          src="https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
