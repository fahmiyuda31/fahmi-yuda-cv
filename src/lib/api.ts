import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add interceptors here if needed
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    return Promise.reject(error)
  }
)
