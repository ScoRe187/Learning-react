import React from "react";
import s from "./Friends.module.css";
import { NavLink, Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    secondary: {
      main: "#b39ddb",
    },
  },
});

let Friends = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;
  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className={s.Friends}>
        <div className={s.SearchPanel}>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className={s.Friends__myFriends}></div>
        <div className={s.FriendsPagination}>
          <ButtonGroup size="small" variant="contained">
            {pages.slice(0, 10).map((p) => {
              return (
                <Button
                  size="small"
                  color={props.currentPage === p ? "primary" : "secondary"}
                  onClick={(e) => {
                    props.onPageChange(p);
                  }}
                >
                  {p}
                </Button>
              );
            })}
          </ButtonGroup>
        </div>
        <div className={s.FriendsList}>
          <span className={s.FriendsList__LastRegistered}>
            The last registered users will be shown there
          </span>
          {props.friendsList.map((u) => (
            <div className={s.FriendItem} key={u.id}>
              <NavLink to={"/profile/" + u.id}>
                <Avatar
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://www.clipartmax.com/png/full/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
                  }
                  alt="UserPhoto"
                ></Avatar>
              </NavLink>
              <div className={s.FriendNameStatus}>{u.name}</div>
              <div className={s.FriendLocation}>
                <span className={s.FriendCountry}>
                  {"u.location.country"},{" "}
                </span>
                <span className={s.FriendCity}>{"u.location.city"}</span>
              </div>
              <span className={s.isFriends}>
                {u.friends ? (
                  <Button
                    variant="contained"
                    disabled={props.inProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.unfollowToDAL(u.id);
                    }}
                    className={s.FriendlyStatus}
                  >
                    В друзьях
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    disabled={props.inProgress.some((id) => id === u.id)}
                    onClick={() => {
                      props.followToDAL(u.id);
                    }}
                    className={s.FriendlyStatus}
                  >
                    Добавить
                  </Button>
                )}
              </span>
              <div>{u.status != null ? u.status : "Without status."}</div>
            </div>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Friends;
