import React from "react";
import s from "./ProfilePostsForm.module.css";
import Post from "./Post/Post";
import PageName from "../../../SubComponents/PageName/PageName";

const ProfilePosts = (props) => {
  let allProfilePosts = props.posts
    .map((p) => <Post key={p.id} text={p.text} likes={p.likes} />)
    .reverse();
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };
  return (
    <div className={s.ProfilePostsForm}>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <div className={s.ButtonHolder}>
        <button onClick={addPost}>Public</button>
      </div>
      <div>
        <PageName name="All my posts" />
        <div className={s.allProfilePosts}>{allProfilePosts}</div>
      </div>
    </div>
  );
};

export default ProfilePosts;
