import React from "react";
import Profile from "./ProfileMain";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14030;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  status: state.profilePage.status,
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {
    addPost,
    onPostChange,
    getUserProfile,
    getStatus,
    updateStatus,
  })
)(ProfileContainer);
