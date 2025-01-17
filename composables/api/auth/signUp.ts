import { useAxios } from "@/composables/api/axios";
import { useAuthStore } from "@/stores/auth";

export const signUp = async (payload) => {
  const axios = useAxios();
  const authStore = useAuthStore();
  return axios.post("/auth/register", payload).then((data) => {
    authStore.setLoginData(data);
  });
};
