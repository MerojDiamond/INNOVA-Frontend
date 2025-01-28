import {useAxios} from "~/composables/api/axios";

export const indexAPI = async (model) => {
    const axios = useAxios();
    return axios.get(`/${model}`)
};
