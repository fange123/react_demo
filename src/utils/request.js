import axios from "axios";

const baseUrl = "http://aaa";
const timeOut = 3000;

const request = axios.create({
  baseURL: baseUrl,
  timeout: timeOut,
});

//请求拦截

request.interceptors.request.use(
  (config) => {
    //!网络请求发送之前，先执行此处的代码
    //? 1.向界面中间展示loading
    //* 2.某些请求需要用户信息携带token，没有就跳转到登录页面
    //+ 3.发送的数据需要进行序列化处理过程

    console.log("请求被拦截");
    return config;
  },
  (err) => {
    console.log(err);
  }
);

//请求响应

request.interceptors.response.use(
  (config) => {
    return config.data;
  },
  (err) => {
    console.log(err);
  }
);

export default request;
