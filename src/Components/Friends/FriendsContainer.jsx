import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import * as axios from "axios";
import Preloader from "./../SubComponents/Preloader";
import {
  followAC,
  unFollowAC,
  setFriendsAC,
  setCurrentPageAC,
  setTotalCountAC,
  toggleIsFetchingAC,
} from "../../redux/friendsReducer";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(res.data.items);
        this.props.setTotalFriendsCount(res.data.totalCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setFriends(res.data.items);
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
  setFriends: setFriendsAC,
  setCurrentPage: setCurrentPageAC,
  setTotalFriendsCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC,
  follow: followAC,
  unFollow: unFollowAC,
})(FriendsContainer);
