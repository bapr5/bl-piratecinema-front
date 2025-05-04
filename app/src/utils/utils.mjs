import { API_ADDR, API_PORT } from "../api/userAPI.mjs";

export function makeUrl(path) {
    return `https://${API_ADDR}${path}`;
}