import { BASE_URL, myAxios } from "./backend";

export const signupUser = (user) => {
    return myAxios.post("/users/register", user).then((response) => response.data);
}

export const loginUser = (user) => {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    return myAxios.post("/users/login", formData).then((response) => response.data);
}

export const signupOwner = (user) => {
    return myAxios.post("/users/owner_register", user).then((response) => response.data);
}

export const loginOwner = (user) => {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    return myAxios.post("/users/owner_login", formData).then((response) => response.data);
}

export const loginAdmin = (user) => {
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    return myAxios.post("/users/admin_login", formData).then((response) => response.data);
}

export const getSingleUser = (userId) => {
    return myAxios.get(`/users/${userId}`).then((response) => response.data);
}

export const updateProfile = (user, userId) => {
    return myAxios.put(`/users/${userId}`, user).then((response) => response.data);
}

export const changePassword = (email, password, newPassword) => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("newPassword", newPassword);
    return myAxios.put("/users/change_password", formData).then((response) => response.data);
}

export const getAllUsers = (pageNumber) => {
    return myAxios.get(`/users/`, {
        params: {
            pageNumber: pageNumber
        }
    }).then((response) => response.data);
}

export const getAllOwners = (pageNumber) => {
    return myAxios.get(`/users/owner`, {
        params: {
            pageNumber: pageNumber
        }
    }).then((response) => response.data);
}

export const uploadImage = (userId, image) => {
    let formData = new FormData();
    formData.append("image", image);
    return myAxios.post(`/users/upload/image/${userId}`, formData).then((response) => response.data);
}

export const USER_IMAGE_RESOURCE = BASE_URL + "/users/image/";