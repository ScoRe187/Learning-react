import React from "react";
import s from "./ProfilePostsForm.module.css";
import Post from "./Post/Post";
import PageName from "../../../SubComponents/PageName/PageName";
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newPostText" />
      <div className={s.ButtonHolder}>
        <button>Public</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "postsAddNewPost" })(AddPostForm);

const ProfilePosts = (props) => {
  let allProfilePosts = props.posts
    .map((p) => <Post key={p.id} text={p.text} likes={p.likes} />)
    .reverse();
  let addNewPost = (values) => {
    debugger;
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.ProfilePostsForm}>
      <div>
        <PageName name="All my posts" />
        <AddPostFormRedux onSubmit={addNewPost} />
        <div className={s.allProfilePosts}>{allProfilePosts}</div>
      </div>
    </div>
  );
};

export default ProfilePosts;
