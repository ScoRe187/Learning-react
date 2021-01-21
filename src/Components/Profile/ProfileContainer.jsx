import React from "react";
import Profile from "./ProfileMain";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  getUserProfile,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

export default compose(
  connect(mapStateToProps, {
    addPost,
    onPostChange,
    getUserProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
