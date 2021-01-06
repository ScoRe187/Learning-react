import ProfileReducer from "./profileReducer";
import MessagesReducer from "./messagesReducer";
import NavigationReducer from "./navigationReduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Yoyoyoyoyoyoyoyoyo, how are u guys?", likes: 20 },
        { id: 2, text: "I'm glad to find new friends", likes: 11 },
        { id: 3, text: "My favourite pet is dog", likes: 2 },
        { id: 4, text: "Hello, my name is", likes: 5 },
      ],
      newPostText: "",
    },
    messages: {
      users: [
        { id: 1, userName: "Mike" },
        { id: 2, userName: "Max" },
        { id: 3, userName: "Alex" },
        { id: 4, userName: "Ivan" },
        { id: 5, userName: "Jack" },
      ],
      messages: [
        { id: 1, message: "hello" },
        { id: 2, message: "How Are u?" },
        { id: 3, message: "Greatings!" },
        { id: 4, message: "Yo" },
        { id: 5, message: "doing well" },
      ],
      newMessageText: "",
    },
    navigation: "",
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log(`Subscriber: "State has been changed!"`);
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.messages = MessagesReducer(this._state.messages, action);
    this._state.navigation = NavigationReducer(this._state.navigation, action);
    this._callSubscriber(this._state);
  },
};

export default store;
