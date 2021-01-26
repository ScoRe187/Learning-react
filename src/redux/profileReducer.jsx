import { usersAPI, profileAPI } from "../API/api";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [
    { id: 1, text: "Yoyoyoyoyoyoyoyoyo, how are u guys?", likes: 20 },
    { id: 2, text: "I'm glad to find new friends", likes: 11 },
    { id: 3, text: "My favourite pet is dog", likes: 2 },
    { id: 4, text: "Hello, my name is", likes: 5 },
  ],
  profile: null,
  status: "",
};

const ProfileReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    posts: [...state.posts],
  };
  let newId = stateCopy.posts.length + 1;
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: newId,
        text: action.newPostText,
        likes: 0,
      };
      stateCopy.posts.push(newPost);
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default ProfileReducer;
