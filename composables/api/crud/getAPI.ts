import {useAxios} from "~/composables/api/axios";

export const getAPI = async (model, id) => {
    const axios = useAxios();
    return axios.get(`/${model}/${id}`);
};
