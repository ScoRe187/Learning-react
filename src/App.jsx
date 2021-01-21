import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import Navigation from "./Components/Navigation/Navigation";
import s from "./App.module.css";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import { Container, Grid } from "@material-ui/core";
import Login from "./Components/Login/Login";

const App = (props) => {
  return (
    <div className={s.AppWrapper}>
      <HeaderContainer />
      <Container fixed className={s.ContentHolder}>
        <Grid container spacing={3}>
          <Grid item md={2}>
            <Navigation />
          </Grid>
          <Grid item md={10}>
            <div className={s.content}>
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/messages" render={() => <MessagesContainer />} />
              <Route path="/friends" render={() => <FriendsContainer />} />
              <Route path="/login" render={() => <Login />} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
