const SET_FRIENDS_LIST = "SET-FRIENDS-LIST";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  friendsList: [],
};

const FriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS_LIST:
      return {
        ...state,
        friendsList: [...state.friendsList, ...action.friendsList],
      };
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

export default FriendsReducer;
