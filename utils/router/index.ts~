import type {RouteLocationNormalized} from "vue-router";
import {makeMenuGroupItem, makeMenuItem} from "~/utils/sider";

export const getLayoutName = (route: RouteLocationNormalized) => {
    return route.meta.layout ?? "default";
}
export const sidebarRoutes = () => {
    return [
        makeMenuItem("dashboard", "Dashboard", "/dashboard"),
        makeMenuGroupItem("users", "Users", [
            makeMenuItem("users.dashboard", "Dashboard", "/users/dashboard"),
            makeMenuItem("users.index", "Users", "/users/"),
        ]),
        makeMenuGroupItem("roles", "Roles", [
            makeMenuItem("roles.dashboard", "Dashboard", "/roles/dashboard"),
            makeMenuItem("roles.index", "Roles", "/roles/"),
        ]),
        makeMenuGroupItem("activity", "Activity (Logging)", [
            makeMenuItem("activity.dashboard", "Dashboard", "/roles/activity"),
            makeMenuItem("activity.users", "Users", "/activity/users"),
            makeMenuItem("activity.objects", "Objects", "/activity/objects"),
        ]),
        makeMenuGroupItem("settings", "Settings", [
            makeMenuItem("settings.main", "Dashboard", "/settings/main"),
            makeMenuItem("settings.features", "Features", "/settings/features"),
            makeMenuItem("settings.activity", "Activity (Logging)", "/settings/activity"),
            makeMenuItem("settings.others", "Others", "/settings/others"),
        ]),
    ]
}