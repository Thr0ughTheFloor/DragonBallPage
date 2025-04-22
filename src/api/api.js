import axios from "axios";

export const ApiRick = axios.create({
    baseURL: "https://www.dragonball-api.com/api"
})