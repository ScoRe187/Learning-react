import React from "react";
import Message from "./Message/MessageElement/Message";
import User from "./User/UserElement/User";
import s from "./Messages.module.css";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newMessageText"
        placeholder="Enter your message"
      ></Field>
      <button>
        <i class="fas fa-paper-plane"></i>
      </button>
    </form>
  );
};

const ReduxSendMessageForm = reduxForm({ form: "messagesSendMessage" })(
  AddMessageForm
);

const Messages = (props) => {
  let state = props.messagesPage;
  let usersElements = state.users.map((u) => (
    <User key={u.id} name={u.userName} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));
  let sendNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
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
          <ReduxSendMessageForm onSubmit={sendNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
