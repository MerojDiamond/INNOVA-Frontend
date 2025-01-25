import {useAxios} from "@/composables/api/axios";
import {useAuthStore} from "~/store/auth";

export const logout = async () => {
    const axios = useAxios();
    const authStore = useAuthStore();
    const router = useRouter();
    return axios.get("/auth/logout").then((res) => {
        authStore.clear()
        router.push("/sign-in");
    });
};
