import { IHttpResponse, IObject } from "./interface";
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

const http = axios.create({
  baseURL: "http://81.68.226.246:1340/exclusive-services",
  timeout: 30000
});

http.interceptors.request.use(
  function (config) {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    config.headers["Request-Start"] = new Date().getTime();
    config.headers["Accept-Language"] = "zh-CN";
    const token = getToken();
    if (token) {
      config.headers["token"] = token;
    }
    if (config.method?.toUpperCase() === "GET") {
      config.params = { ...config.params, _t: new Date().getTime() };
    }
    if (Object.values(config.headers).includes("application/x-www-form-urlencoded")) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    if (response.data.code === 401) {
    }
    return response;
  },
  (error) => {
    const status = getValueByKeys(error, "response.status", 500);
    const httpCodeLabel: IObject<string> = {
      400: "请求参数错误",
      401: "未授权，请登录",
      403: "拒绝访问",
      404: `请求地址出错: ${getValueByKeys(error, "response.config.url", "")}`,
      408: "请求超时",
      500: "API接口报500错误",
      501: "服务未实现",
      502: "网关错误",
      503: "服务不可用",
      504: "网关超时",
      505: "HTTP版本不受支持"
    };
    if (error && error.response) {
      console.error("请求错误", error.response.data);
    }
    if (status === 401) {
    }
    return Promise.reject(new Error(httpCodeLabel[status] || "接口错误"));
  }
);

const getToken = (): string => {
  return "";
};

/**
 * 获取对象下的字段值
 * @param record {}
 * @param key 'a.b.c'
 * @param defaultValue
 * @returns
 */
const getValueByKeys = (record: IObject = {}, key: string, defaultValue?: unknown): any => {
  const keys = key.split(".");
  for (let i = 0; i < keys.length; i++) {
    record = record[keys[i]] || (i === keys.length - 1 ? defaultValue : {});
  }
  return record || defaultValue;
};

export default (o: AxiosRequestConfig): Promise<IHttpResponse> => {
  return new Promise((resolve, reject) => {
    http(o)
      .then((res) => {
        return resolve(res.data);
      })
      .catch(reject);
  });
};
