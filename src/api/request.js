import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 创建axios实例
const service = axios.create({
  // baseURL: "/api", // api 因为跨域代理设置了前缀标识为 api ，所以在这里要加上
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.data);
  }
);

export default service;
