import axios from "axios";

export const BASE_URL = "https://car-rental-backend-production-f6fe.up.railway.app/crs";
export const BASE_URL_IMAGE = "https://car-rental-backend-production-f6fe.up.railway.app/uploads";

export const myAxios = axios.create({
    baseURL: BASE_URL
});