import React from "react";
import s from "./Textarea.module.css";

const Textarea = () => {
  return (
    <textarea
      className={s.Textarea}
      type="text"
      placeholder="Write some text"
    ></textarea>
  );
};

export default Textarea;
