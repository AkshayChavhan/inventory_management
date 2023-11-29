import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASEURL;
const BASE_URL = "http://localhost:8001/api/v1"
const API = axios.create({baseURL: BASE_URL})

export default API;
