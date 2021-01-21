import { applyMiddleware, combineReducers, createStore } from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import FriendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

// import NavigationReducer from "./navigationReduser";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  friendsPage: FriendsReducer,
  auth: authReducer,
  //   navigation: NavigationReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
