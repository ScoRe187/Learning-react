import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.Post}>
      <span>Date: </span>
      <span>{props.text}</span>
      <span>Likes: {props.likes}</span>
      <button>
        <i className="fas fa-thumbs-up"></i>
      </button>
    </div>
  );
};

export default Post;
