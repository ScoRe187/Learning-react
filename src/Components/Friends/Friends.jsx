import * as axios from "axios";
import React from "react";
import s from "./Friends.module.css";

const FriendsContainer = (props) => {
  if (props.friendsList.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        props.setFriends(res.data.items);
      });

    /*props.setFriends([
      {
        id: 1,
        friendPhoto:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
        friends: true,
        fullUserName: "Michel Parker",
        status: "Fine on my own...",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        friendPhoto:
          "https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        friends: true,
        fullUserName: "Ann Richards",
        status: "Hello!",
        location: { city: "New-York", country: "USA" },
      },
      {
        id: 3,
        friendPhoto:
          "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        friends: false,
        fullUserName: "Semen Ivanov",
        status: "Privetik",
        location: { city: "Omsk", country: "Russia" },
      },
    ]);*/
  }
  return (
    <div className={s.Friends}>
      <div className={s.SearchPanel}>
        <input type="text" />
        <button>Search</button>
      </div>
      <div className={s.FriendsList}>
        {props.friendsList.map((f) => (
          <div className={s.FriendItem} key={f.id}>
            <img
              src={
                f.photos.small != null
                  ? f.photos.small
                  : "https://www.clipartmax.com/png/full/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png"
              }
            />
            <div className={s.FriendNameStatus}>{f.name}</div>
            <div className={s.FriendLocation}>
              <span className={s.FriendCountry}>{"f.location.country"}, </span>
              <span className={s.FriendCity}>{"f.location.city"}</span>
            </div>
            <span className={s.isFriends}>
              {f.friends ? (
                <button
                  onClick={() => props.unFollow(f.id)}
                  className={s.FriendlyStatus}
                >
                  В друзьях
                </button>
              ) : (
                <button
                  onClick={() => props.follow(f.id)}
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
};

export default FriendsContainer;
