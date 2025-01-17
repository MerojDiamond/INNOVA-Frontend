import axios from "axios";
import {useAuthStore} from "~/store/auth";
import {useToast} from "vue-toastification";

export const useAxios = () => {
    const store = useAuthStore();
    const toast = useToast();
    let client = axios.create({
        baseURL: "http://innova/api",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + store.token,
        },
    });
    client.interceptors.response.use(
        (response) => {
            let data = response.data;
            if (data.message && data.status) toast.success(data.message);
            if (data.auth_data) {
                localStorage.setItem(
                    "userData",
                    JSON.stringify({user: data.auth_data.user, token: store.token}),
                );
                store.setLoginData({
                    user: data.auth_data.user,
                    token: store.token,
                });
            }
            return response;
        },
        (error) => {
            if (error.status == 422) {
                let err = error.response.data.errors;
                for (let key in err) {
                    toast.error(err[key].join("\n"));
                }
            }
            if (error.response.data.message && error.response.data.status) toast.error(error.response.data.message);
            return Promise.reject(error);
        },
    );
    return client;
};
