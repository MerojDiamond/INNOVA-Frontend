import {ref} from "vue";
import {defineStore} from "pinia";
import {getUserData} from "~/composables/localStorage/auth";

export const useAuthStore = defineStore("auth", () => {
    let userData = getUserData();
    const user = ref(userData?.user ?? {});
    const token = ref(userData?.token ?? null);

    function setLoginData(data) {
        user.value = data.user;
        token.value = data.token;
        localStorage.setItem("userData", JSON.stringify({user: data.user, token: data.token}));
    }

    function clear() {
        user.value = {}
        token.value = null
        localStorage.removeItem("userData")
    }

    return {user, token, setLoginData, clear};
});
