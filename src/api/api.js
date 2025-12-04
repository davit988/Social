import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers : {
    'api-key' : 'f2a16fa0-d00f-4cfe-92f5-a7554b47067f'
  },
  withCredentials : true
});

export const socialAPI = {
  getUsers(page = 1) {
    return instance.get(`/users?count=100&page=${page}`);
  },
  login(body) {
    return instance.post("/auth/login", body);
  },
  getProfile(userId){
    return instance.get(`/profile/${userId}`)
  },
  changeImg(file){
    const files = new FormData
    files.append('file',file)
    return instance.put('/profile/photo',files)
  }
};
