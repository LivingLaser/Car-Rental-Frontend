export const isLoggedin = () => {
    let data = localStorage.getItem("data");
    return data!=null ? true : false;
}

export const doLogin = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
}

export const doLogout = () => {
    localStorage.removeItem("data");
}

export const getCurrentUserDetail = () => {
    return isLoggedin ? JSON.parse(localStorage.getItem("data")) : null;
}