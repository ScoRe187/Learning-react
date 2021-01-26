import { applyMiddleware, combineReducers, createStore } from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import FriendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

// import NavigationReducer from "./navigationReduser";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  friendsPage: FriendsReducer,
  auth: authReducer,
  form: formReducer,
  //   navigation: NavigationReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
