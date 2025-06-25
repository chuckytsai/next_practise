import axios from "@/lib/axios";

interface LoginPayload {
    email: string;
    psd: string;
}

export const getLogin = async (payload: LoginPayload) => axios.post("/api/login", payload);
