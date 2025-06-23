import axios from "@/lib/axios";

export const getUsers = () => axios.get("/api/storeList");
