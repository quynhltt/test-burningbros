import axios from "axios";

export const BASE_URL = "https://dummyjson.com/products";

export const https = axios.create({
    baseURL: BASE_URL,
})


