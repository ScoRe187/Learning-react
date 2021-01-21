import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import Preloader from "./../SubComponents/Preloader";
import {
  follow,
  unFollow,
  setCurrentPage,
  toggleInProgressSetting,
  getUsers,
  followToDAL,
  unfollowToDAL,
} from "../../redux/friendsReducer";
import {} from "./../../redux/friendsReducer";
import { withAuthRedirect } from "./../../HOC/withAuthRedirect";
import { compose } from "redux";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Friends
            totalFriendsCount={this.props.totalFriendsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            friendsList={this.props.friendsList}
            onPageChange={this.onPageChange}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            inProgress={this.props.inProgress}
            followToDAL={this.props.followToDAL}
            unfollowToDAL={this.props.unfollowToDAL}
            isAuth={this.props.isAuth}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    friendsList: state.friendsPage.friendsList,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    inProgress: state.friendsPage.inProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    toggleInProgressSetting,
    follow,
    unFollow,
    getUsers,
    followToDAL,
    unfollowToDAL,
  }),
  withAuthRedirect
)(FriendsContainer);
