import { authAPI } from "../API/api";
const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const getLoggedProfile = () => {
  return (dispatch) => {
    authAPI.myProfile().then((res) => {
      if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data;
        dispatch(setUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
