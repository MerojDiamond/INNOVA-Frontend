export const getUserData = () => {
    const data = localStorage.getItem("userData");
    if (data) {
        return JSON.parse(data);
    }
    return null
}