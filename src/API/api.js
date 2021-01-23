import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "62ffb654-56a9-4fdc-8da5-64c9e6d6b23f",
  },
});

export const usersAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  getUsers(currentPage = 1, pageSize = 20) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object!");
    return profileAPI.getProfile(userId);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`, {}).then((res) => res.data);
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((res) => res.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export const authAPI = {
  myProfile() {
    return instance.get(`auth/me`);
  },
};
