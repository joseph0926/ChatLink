import axios from "axios";

export const customAxios = axios.create({
  baseURL: "/server/api/v1",
});
