import {useAxios} from "@/composables/api/axios";
import {useAuthStore} from "~/store/auth";

export const signUp = async (payload) => {
    const axios = useAxios();
    const authStore = useAuthStore();
    const router = useRouter();
    return axios.post("/auth/register", payload).then((res) => {
        authStore.setLoginData(res.data);
        router.push("/dashboard");
    });
};
