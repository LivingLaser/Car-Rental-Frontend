import { myAxios } from "./backend"

export const addCarVariant = (carVariant, modelId) => {
    return myAxios.post(`/variants/${modelId}`, carVariant).then((response) => response.data);
}

export const getVariantById = (registration) => {
    return myAxios.get(`/variants/${registration}`).then((response) => response.data);
}

export const updateVariant = (carVariant, registration) => {
    return myAxios.put(`/variants/${registration}`, carVariant).then((response) => response.data);
}

export const getVariantsByModel = (modelId) => {
    return myAxios.get(`/variants/car/${modelId}`).then((response) => response.data);
}

export const removeCarVariant = (registration) => {
    return myAxios.delete(`/variants/${registration}`).then((response) => response.data);
}

export const clearCarVariants = () => {
    return myAxios.get("/variants/clear").then((response) => response.data);
}