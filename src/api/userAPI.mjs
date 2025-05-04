import axios from "axios";

const API_ADDR = process.env.API_ADDR || "127.0.0.1";
const API_PORT = process.env.API_PORT || "3001";

const $host = axios.create({
  baseURL: `http://${API_ADDR}:${API_PORT}/`,
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
