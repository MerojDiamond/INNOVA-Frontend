import {useAxios} from "~/composables/api/axios";

export const deleteAPI = async (model, id) => {
    const axios = useAxios();
    return axios.delete(`/${model}/${id}`);
};
