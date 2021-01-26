import Messages from "./Messages";
import { sendMessage } from "../../redux/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "./../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (messageText) => {
      dispatch(sendMessage(messageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
