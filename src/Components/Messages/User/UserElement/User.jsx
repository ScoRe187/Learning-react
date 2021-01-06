import React from "react";
import s from "./User.module.css";

const User = (props) => {
  return <span className={s.Users__item}>{props.name}</span>;
};

export default User;
