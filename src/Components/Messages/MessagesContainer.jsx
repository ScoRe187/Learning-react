import Messages from "./Messages";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messagesReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (messageText) => {
      dispatch(updateNewMessageTextActionCreator(messageText));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
