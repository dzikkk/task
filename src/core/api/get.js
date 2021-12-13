import axios from "axios";
import { curry } from "ramda";

export const get = (url) =>
  axios({
    method: 'get',
    url,
  })

export const request = axios.request;
