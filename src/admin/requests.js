import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.baseURL = "https://webdev-api.loftschool.com/";

axios.defaults.headers["Authorization"] = `Bearer ${token}`;
// const proj = axios.get("/skills/161")
// console.log(
//   proj
// );
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return axios.post("/refreshToken").then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axios;