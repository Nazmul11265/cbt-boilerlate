import axios from 'axios'

const API = "http://localhost:8080/api";


const axiosInstance = axios.create({
    baseURL: API
})

export default axiosInstance;