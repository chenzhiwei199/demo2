import axios from 'axios';

export const domains = {
  local: `page-gateway-local.nioint.com:7001`,
  dev: `page-gateway-dev.nioint.com`,
  test: `page-gateway-test.nioint.com`,
  stg: `page-gateway-stg.nioint.com`,
  prod: `page-gateway.nioint.com`,
};
const env = (window as any)._APIMAP_ENV as keyof typeof domains;
const protocol = env === 'local' ? 'http' : 'https';
export const axiosInstance = axios.create({
  baseURL: `${protocol}://${domains[env]}`,
});

export interface IBaseResponse<T> {
  data: T;
  success: boolean;
  message: string;
  total: number;
}
export function get<T>(url: string) {
  return axiosInstance
    .get<IBaseResponse<T>>(url, { withCredentials: true })
    .then((res) => {
      return res.data;
    });
}

export function post<T>(url: string, data: any) {
  return axiosInstance
    .post<IBaseResponse<T>>(url, data, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });
}
export function put<T>(url: string, data: any) {
  return axiosInstance
    .post<IBaseResponse<T>>(url, data, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });
}

export function del<T>(url: string) {
  return axiosInstance.delete<IBaseResponse<T>>(url).then((res) => {
    return res.data;
  });
}
