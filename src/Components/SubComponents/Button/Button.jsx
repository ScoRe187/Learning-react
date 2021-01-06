import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={s.ButtonHolder}>
      <button onClick={props.onClick} className={s.Button}>
        {props.btnData}
      </button>
    </div>
  );
};

export default Button;
