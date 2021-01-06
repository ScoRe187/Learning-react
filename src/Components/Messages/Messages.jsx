import React from "react";
import Message from "./Message/MessageElement/Message";
import User from "./User/UserElement/User";
import s from "./Messages.module.css";

const Messages = (props) => {
  let state = props.messagesPage;
  let usersElements = state.users.map((u) => (
    <User key={u.id} name={u.userName} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  let newMessageText = React.createRef();
  let sendMessage = () => {
    props.sendMessage();
  };
  let updateNewMessageText = (e) => {
    let messageText = e.target.value;
    props.updateNewMessageText(messageText);
  };
  return (
    <div className={s.Messages}>
      <div className={s.usersData}>
        <div className={s.usersSettings}></div>
        <div className={s.Users}>{usersElements}</div>
        <div className={s.messagesSettings}></div>
      </div>
      <div className={s.messagesData}>
        <div className={s.chatSettings}></div>
        <div className={s.Chat}>{messagesElements}</div>
        <div className={s.chat}>
          <textarea
            onChange={updateNewMessageText}
            ref={newMessageText}
            value={state.newMessageText}
          ></textarea>
          <button onClick={sendMessage}>
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
