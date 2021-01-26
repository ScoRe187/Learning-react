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
        message: action.messageText,
      };
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessage = (messageText) => {
  return {
    type: SEND_MESSAGE,
    messageText,
  };
};

export default MessagesReducer;
