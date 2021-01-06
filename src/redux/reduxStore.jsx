import { combineReducers, createStore } from "redux";
import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import FriendsReducer from "./friendsReducer";

// import NavigationReducer from "./navigationReduser";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  friendsPage: FriendsReducer,
  //   navigation: NavigationReducer,
});

let store = createStore(reducers);

export default store;
