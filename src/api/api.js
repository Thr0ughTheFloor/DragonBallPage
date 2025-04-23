import axios from "axios";

export const ApiDB = axios.create({
    baseURL: "https://www.dragonball-api.com/api"
})