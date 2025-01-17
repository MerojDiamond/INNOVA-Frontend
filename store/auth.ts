import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({});
  const token = ref(null);

  function setLoginData(data) {
    user.value = data.user;
    token.value = data.token;
  }

  return { user, token, setLoginData };
});
