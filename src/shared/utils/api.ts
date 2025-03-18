import axios, { AxiosRequestConfig } from 'axios';

const create = (options?: AxiosRequestConfig) => {
  const instance = axios.create(
    Object.assign(
      { baseURL: process.env.NEXT_PUBLIC_API_URL, withCredentials: true },
      options
    )
  );
  instance.defaults.paramsSerializer = function (paramObj) {
    const params = new URLSearchParams();
    for (const key in paramObj) {
      params.append(key, paramObj[key]);
    }

    return params.toString();
  };

  return instance;
};

export const api = create();
