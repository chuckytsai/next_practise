import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// 全域錯誤攔截
api.interceptors.response.use(
    response => response,
    error => {
        console.error("API error:", error);
        return Promise.reject(error);
    }
);

export default api;