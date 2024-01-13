import axios from "axios";

const customFetch = axios.create({
    baseURL: "/api/v3",
});

export default customFetch;