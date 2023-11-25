import axios, { type AxiosInstance, type CreateAxiosDefaults } from "axios";
import { toast } from "react-toastify";

export class FetchController {
  constructor() {
    this.axiosInstance = axios.create(this.defaultConfig());
  }

  private axiosInstance: AxiosInstance;

  private defaultConfig(): CreateAxiosDefaults {
    return {
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      responseType: "json",
    };
  }

  private setOnRequest() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  private setOnResponse() {
    this.axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        toast.error("Ocorreu um erro.");
        return Promise.reject(err.response);
      }
    );
  }

  getInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
