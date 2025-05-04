import axios from "axios";

export const API_ADDR = process.env.API_ADDR || "127.0.0.1";
export const API_PORT = process.env.API_PORT || "3001";

const $host = axios.create({
  baseURL: `https://${API_ADDR}:${API_PORT}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAvailableFiles = async () => {
  try {
    const response = await $host.get("/available");
    return response.data;
  } catch (error) {
    return error;
  }
};
