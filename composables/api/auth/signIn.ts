import {useAxios} from "@/composables/api/axios";
import {useAuthStore} from "~/store/auth";

export const signIn = async (payload) => {
    const axios = useAxios();
    const authStore = useAuthStore();
    const router = useRouter();
    return axios.post("/auth/login", payload).then((res) => {
        authStore.setLoginData(res.data);
        router.push("/dashboard");
    });
};
