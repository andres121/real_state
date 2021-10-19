import Vue from "vue";

// axios
import axios from "axios";

const axiosIns = axios.create({
  // You can add your headers here
  // ====================== ==========

  //baseURL: process.env.API_URI,
  // baseURL: 'https://web.addy.la/',

  // baseURL: "https://app.addy.la/",
  baseURL: "http://127.0.0.1:8000",
  //setToken: localStorage.getItem("accessToken"),
  //timeout: 1000,
  headers: { "Contenct-type": "multipart/form-data" },
});

Vue.prototype.$http = axiosIns;

export default axiosIns;