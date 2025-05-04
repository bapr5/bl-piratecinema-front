import { API_ADDR, API_PORT } from "../api/userAPI.mjs";

export function makeUrl(path) {
    return `http://${API_ADDR}:${API_PORT}${path}`;
}