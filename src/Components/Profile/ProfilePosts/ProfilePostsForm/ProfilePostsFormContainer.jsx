import ProfilePosts from "./ProfilePosts";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(onPostChangeActionCreator(text));
    },
  };
};

const ProfilePostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePosts);

export default ProfilePostsContainer;
