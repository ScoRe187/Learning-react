const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [
    { id: 1, text: "Yoyoyoyoyoyoyoyoyo, how are u guys?", likes: 20 },
    { id: 2, text: "I'm glad to find new friends", likes: 11 },
    { id: 3, text: "My favourite pet is dog", likes: 2 },
    { id: 4, text: "Hello, my name is", likes: 5 },
  ],
  newPostText: "",
  profile: null,
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
        text: state.newPostText,
        likes: 0,
      };

      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case ON_POST_CHANGE: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.postText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const onPostChange = (postText) => {
  return {
    type: ON_POST_CHANGE,
    postText: postText,
  };
};

export default ProfileReducer;
