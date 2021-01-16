import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "62ffb654-56a9-4fdc-8da5-64c9e6d6b23f",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 20) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`, {}).then((res) => res.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};
