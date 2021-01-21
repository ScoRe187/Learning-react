import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
// import s from "./Header.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  headerBar: {
    backgroundColor: "#673ab7",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Header = ({ isAuth, login }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.headerBar}>
      <Container fixed>
        <Toolbar className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            SocialApp Project
          </Typography>
          {isAuth ? (
            login
          ) : (
            <NavLink to="/login">
              <Button color="inherit" variant="contained">
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    // <header className={s.header}>
    //   <div className={s.container}>
    //     <img
    //       src="https://mostaql.hsoubcdn.com/uploads/201639-1469757735-Logo_Image_01.png"
    //       alt=""
    //     />
    //     <div className={s.UserNAuth}>
    //       {isAuth ? login : <NavLink to="/login">Login</NavLink>}
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
