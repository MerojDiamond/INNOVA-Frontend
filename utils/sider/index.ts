import {NuxtLink} from "#components";

export const makeLabel = (url, label) => {
    return h(
        NuxtLink,
        {
            to: url
        },
        {default: () => label}
    )
}
export const makeMenuItem = (key, label, url) => {
    return {
        label: () => makeLabel(url, label),
        key,
    }
}
export const makeMenuGroupItem = (key, label, children) => {
    return {
        label,
        key,
        children,
    }
}