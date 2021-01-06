import React from "react";
import s from "./PageName.module.css";

const PageName = (props) => {
  return (
    <div className={s.PageName}>
      <h3>{props.name}</h3>
    </div>
  );
};

export default PageName;
