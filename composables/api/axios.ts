import axios from "axios";

export const useAxios = () => {
  return axios.create({
    baseURL: "http://innova/api",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
