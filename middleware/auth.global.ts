import {useAuthStore} from "~/store/auth";
import _ from "lodash";
import {getLayoutName} from "~/utils/router";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const user = computed(() => authStore.user);

    if (getLayoutName(to) == "default" && _.isEmpty(user.value)) {
        return navigateTo('/sign-in');
    } else if (getLayoutName(to) == "blank" && !_.isEmpty(user.value)) {
        return navigateTo('/dashboard');
    }
});
