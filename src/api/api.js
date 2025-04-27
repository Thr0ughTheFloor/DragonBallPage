import axios from "axios";

export const ApiDB = axios.create({
    baseURL: "https://dragonball-api.com/api"
})