import Messages from "./Messages";
import { sendMessage, updateNewMessageText } from "../../redux/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../HOC/withAuthRedirect";
// import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let AuthRedirectComponent = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageText,
})(AuthRedirectComponent);

// compose();

export default MessagesContainer;
