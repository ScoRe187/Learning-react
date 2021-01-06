const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const MessagesReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages: [...state.messages],
  };
  let newId = stateCopy.messages.length + 1;
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: newId,
        message: stateCopy.newMessageText,
      };
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.messageText;
      return stateCopy;

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageTextActionCreator = (messageText) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText,
  };
};

export default MessagesReducer;
