import React from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import * as axios from "axios";
import {
  followAC,
  unFollowAC,
  setFriendsAC,
  setCurrentPageAC,
  setTotalCountAC,
} from "../../redux/friendsReducer";

class FriendsContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setFriends(res.data.items);
        this.props.setTotalFriendsCount(res.data.totalCount);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setFriends(res.data.items);
      });
  };
  render() {
    return (
      <Friends
        totalFriendsCount={this.props.totalFriendsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        friendsList={this.props.friendsList}
        onPageChange={this.onPageChange}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    friendsList: state.friendsPage.friendsList,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setFriends: (friendList) => {
      dispatch(setFriendsAC(friendList));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalFriendsCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    follow: (friendId) => {
      dispatch(followAC(friendId));
    },
    unFollow: (friendId) => {
      dispatch(unFollowAC(friendId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
