import * as axios from "axios";
import React from "react";
import s from "./Friends.module.css";

class Friends extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        this.props.setFriends(res.data.items);
      });
  }
  render() {
    return (
      <div className={s.Friends}>
        <div className={s.SearchPanel}>
          <input type="text" />
          <button>Search</button>
        </div>
        <div className={s.FriendsList}>
          {this.props.friendsList.map((f) => (
            <div className={s.FriendItem} key={f.id}>
              <img
                src={
                  f.photos.small != null
                    ? f.photos.small
                    : "https://www.clipartmax.com/png/full/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
                }
                alt="UserPhoto"
              />
              <div className={s.FriendNameStatus}>{f.name}</div>
              <div className={s.FriendLocation}>
                <span className={s.FriendCountry}>
                  {"f.location.country"},{" "}
                </span>
                <span className={s.FriendCity}>{"f.location.city"}</span>
              </div>
              <span className={s.isFriends}>
                {f.friends ? (
                  <button
                    onClick={() => this.props.unFollow(f.id)}
                    className={s.FriendlyStatus}
                  >
                    В друзьях
                  </button>
                ) : (
                  <button
                    onClick={() => this.props.follow(f.id)}
                    className={s.FriendlyStatus}
                  >
                    Добавить
                  </button>
                )}
              </span>
              <div>{f.status}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Friends;
