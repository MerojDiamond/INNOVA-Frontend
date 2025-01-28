import {useAxios} from "~/composables/api/axios";

export const createAPI = async (model, data, isForm = false) => {
    const axios = useAxios();
    if (isForm)
        return axios.postForm(`/${model}`, data)
    else
        return axios.post(`/${model}`, data)
};
