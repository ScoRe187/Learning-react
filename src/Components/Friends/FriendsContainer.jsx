import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import Preloader from "./../SubComponents/Preloader";
import {
  follow,
  unFollow,
  setFriends,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
} from "../../redux/friendsReducer";
import { usersAPI } from "./../../API/api";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(data.items);
    });
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
  };
};

export default connect(mapStateToProps, {
  setFriends,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  follow,
  unFollow,
})(FriendsContainer);
