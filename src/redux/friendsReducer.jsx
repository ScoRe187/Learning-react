const SET_FRIENDS_LIST = "SET-FRIENDS-LIST";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";

let initialState = {
  friendsList: [],
  pageSize: 20,
  totalFriendsCount: 0,
  currentPage: 1,
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
    default:
      return state;
  }
};

export const setFriendsAC = (friendsList) => ({
  type: SET_FRIENDS_LIST,
  friendsList,
});
export const followAC = (friendId) => ({
  type: FOLLOW,
  friendId,
});
export const unFollowAC = (friendId) => ({
  type: UNFOLLOW,
  friendId,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalCountAC = (totalFriendsCount) => ({
  type: SET_TOTAL_COUNT,
  totalFriendsCount,
});

export default FriendsReducer;
