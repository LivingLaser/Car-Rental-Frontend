import { myAxios } from "./backend";

export const signupUser = (user) => {
    return myAxios.post("/users/register", user).then((response) => response.data);
}

export const loginUser = (user) => {
    return myAxios.get(`/users/login?email=${user.email}&password=${user.password}`).then((response) => response.data);
}