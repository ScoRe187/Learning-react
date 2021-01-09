import React from "react";
import s from "./Friends.module.css";

let Friends = (props) => {
  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.Friends}>
      <div className={s.SearchPanel}>
        <input type="text" />
        <button>Search</button>
      </div>
      <div className={s.FriendsPagination}>
        {pages.slice(0, 10).map((p) => {
          return (
            <span
              className={props.currentPage === p && s.Active}
              onClick={(e) => {
                props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
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
              alt="UserPhoto"
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
            <div>{f.status != null ? f.status : "Without status."}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
