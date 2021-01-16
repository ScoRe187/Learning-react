import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Navigation from "./Components/Navigation/Navigation";
import s from "./App.module.css";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";

const App = (props) => {
  return (
    <div className={s.AppWrapper}>
      <HeaderContainer />
      <div className={s.ContentHolder}>
        <Navigation />
        <div className={s.content}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/messages" render={() => <MessagesContainer />} />
          <Route path="/friends" render={() => <FriendsContainer />} />
        </div>
      </div>
    </div>
  );
};

export default App;
