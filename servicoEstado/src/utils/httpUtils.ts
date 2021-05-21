import axios, { Method } from "axios";

import { baseURL } from "../config/httpConfig";

export class HttpUtils {

  async request(url: string, method: Method): Promise<any> {
    return axios({ baseURL, url, method })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}