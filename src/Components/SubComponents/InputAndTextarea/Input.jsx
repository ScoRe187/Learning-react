import React from "react";
import s from "./Input.module.css";

const Input = () => {
  return (
    <input className={s.Input} type="text" placeholder="Write some text" />
  );
};

export default Input;
