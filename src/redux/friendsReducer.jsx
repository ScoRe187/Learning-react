import { usersAPI } from "./../API/api";
const SET_FRIENDS_LIST = "SET-FRIENDS-LIST";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_PRELOADER = "TOGGLE-PRELOADER";
const TOGGLE_INPROGRESS_SETTING = "TOGGLE-INPROGRESS-SETTING";

let initialState = {
  friendsList: [],
  pageSize: 20,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: true,
  inProgress: [],
};

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friendsList: state.friendsList.map((f) => {
          if (f.id === action.friendId) {
            return { ...f, friends: true };
          }
          return f;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        friendsList: state.friendsList.map((f) => {
          if (f.id === action.friendId) {
            return { ...f, friends: false };
          }
          return f;
        }),
      };
    case SET_FRIENDS_LIST:
      return {
        ...state,
        friendsList: action.friendsList,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalFriendsCount: action.totalFriendsCount,
      };
    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_INPROGRESS_SETTING:
      return {
        ...state,
        inProgress: action.inProgress
          ? [...state.inProgress, action.userId]
          : state.inProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const setFriends = (friendsList) => ({
  type: SET_FRIENDS_LIST,
  friendsList,
});
export const follow = (friendId) => ({
  type: FOLLOW,
  friendId,
});
export const unFollow = (friendId) => ({
  type: UNFOLLOW,
  friendId,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalCount = (totalFriendsCount) => ({
  type: SET_TOTAL_COUNT,
  totalFriendsCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_PRELOADER,
  isFetching,
});
export const toggleInProgressSetting = (inProgress, userId) => ({
  type: TOGGLE_INPROGRESS_SETTING,
  inProgress,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setFriends(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

export const followToDAL = (userId) => {
  return (dispatch) => {
    dispatch(toggleInProgressSetting(true, userId));
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleInProgressSetting(false, userId));
    });
  };
};

export const unfollowToDAL = (userId) => {
  return (dispatch) => {
    dispatch(toggleInProgressSetting(true, userId));
    usersAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollow(userId));
      }
      dispatch(toggleInProgressSetting(false, userId));
    });
  };
};

export default FriendsReducer;
