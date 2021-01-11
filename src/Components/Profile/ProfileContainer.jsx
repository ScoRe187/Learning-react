import React from "react";
import * as axios from "axios";
import Profile from "./ProfileMain";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  setUserProfile,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        this.props.setUserProfile(res.data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  addPost,
  onPostChange,
  setUserProfile,
})(withUrlDataContainerComponent);
