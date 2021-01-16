const SET_FRIENDS_LIST = "SET-FRIENDS-LIST";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const TOGGLE_PRELOADER = "TOGGLE-PRELOADER";

let initialState = {
  friendsList: [],
  pageSize: 20,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: true,
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

export default FriendsReducer;
