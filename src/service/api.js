import axios from 'axios'

export const api = axios.create({
    baseURL: "https://auto-dieta-api.onrender.com"
})
