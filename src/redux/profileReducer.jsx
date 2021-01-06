const ADD_POST = "ADD-POST";
const ON_POST_CHANGE = "ON-POST-CHANGE";

let initialState = {
  posts: [
    { id: 1, text: "Yoyoyoyoyoyoyoyoyo, how are u guys?", likes: 20 },
    { id: 2, text: "I'm glad to find new friends", likes: 11 },
    { id: 3, text: "My favourite pet is dog", likes: 2 },
    { id: 4, text: "Hello, my name is", likes: 5 },
  ],
  newPostText: "",
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

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const onPostChangeActionCreator = (postText) => {
  return {
    type: ON_POST_CHANGE,
    postText: postText,
  };
};

export default ProfileReducer;
