import {en} from "~/lang/en"
import {ru} from "~/lang/ru"
import {tj} from "~/lang/tj"

export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'en',
        messages: {
            en,
            ru,
            tj
        }
    }
})