import { BASE_URL, myAxios } from "./backend"

export const addCarModel = (car) => {
    return myAxios.post("/cars/", car).then((response) => response.data);
}

export const getModelById = (modelId) => {
    return myAxios.get(`/cars/${modelId}`).then((response) => response.data);
}

export const updateModel = (car, modelId) => {
    return myAxios.put(`/cars/${modelId}`, car).then((response) => response.data);
}

export const getByRandom = () => {
    return myAxios.get("/cars/random").then((response) => response.data);
}

export const getAllCars = (pageNumber) => {
    return myAxios.get("/cars/", {
        params: {
            pageNumber: pageNumber
        }
    }).then((response) => response.data);
}

export const getBySearch = (keyword, pageNumber) => {
    return myAxios.get(`/cars/search/${keyword}`, {
        params: {
            pageNumber: pageNumber
        }
    }).then((response) => response.data);
}

export const getByFilter = (filters, pageNumber) => {
    return myAxios.get("/cars/filter", {
        params: {
            mileage: filters.mileage,
            seatCapacity: filters.seatCapacity,
            bootSpace: filters.bootSpace,
            rentPrice: filters.rentPrice,
            pageNumber: pageNumber
        }
    }),then((response) => response.data);
}

export const getFilterValues = () => {
    return myAxios.get("/cars/filter_values").then((response) => response.data);
}

export const removeCarModel = (modelId) => {
    return myAxios.delete(`/cars/${modelId}`).then((response) => response.data);
}

export const uploadImage = (modelId, image) => {
    let formData = new FormData();
    formData.append("image", image);
    return myAxios.post(`/cars/upload/image/${modelId}`, formData).then((response) => response.data);
}

export const CAR_IMAGE_RESOURCE = BASE_URL + "/cars/image/";