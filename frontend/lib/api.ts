import axios from "axios"
import { ENV } from "./ENV"

// Creates a reusable Axios instance
const api = axios.create({
    baseURL: `${ENV.SERVER_URL}/api/v1`,
    headers: {
        "Content-Type": "application/json"
    },
})

export default api