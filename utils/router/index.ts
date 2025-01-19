import type {RouteLocationNormalized} from "vue-router";

export const getLayoutName = (route: RouteLocationNormalized) => {
    return route.meta.layout ?? "default";
}