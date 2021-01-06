import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return <span className={s.Chat__message}>{props.message}</span>;
};

export default Message;
