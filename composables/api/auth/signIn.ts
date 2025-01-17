import {useAxios} from "@/composables/api/axios";
import {useAuthStore} from "~/store/auth";

export const signIn = async (payload) => {
    const axios = useAxios();
    const authStore = useAuthStore();
    return axios.post("/auth/login", payload).then((data) => {
        authStore.setLoginData(data);
    });
};
