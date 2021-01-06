import { connect } from "react-redux";
import Friends from "./Friends";
import { followAC, unFollowAC } from "../../redux/friendsReducer";
import { setFriendsAC } from "./../../redux/friendsReducer";

let mapStateToProps = (state) => {
  return {
    friendsList: state.friendsPage.friendsList,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setFriends: (friendList) => {
      dispatch(setFriendsAC(friendList));
    },
    follow: (friendId) => {
      dispatch(followAC(friendId));
    },
    unFollow: (friendId) => {
      dispatch(unFollowAC(friendId));
    },
  };
};

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
