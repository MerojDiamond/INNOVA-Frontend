import {useAxios} from "~/composables/api/axios";

export const updateAPI = async (model, data, isForm = false) => {
    const axios = useAxios();
    if (isForm)
        return axios.putForm(`/${model}`, data)
    else
        return axios.put(`/${model}`, data)
};
