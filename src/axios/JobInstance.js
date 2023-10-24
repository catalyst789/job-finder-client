import axios from "axios";

export const JobInstance = axios.create({
    // baseURL: 'http://localhost:4000/jobs'
    baseURL: 'https://job-finder-server-eyvc.onrender.com/jobs'
})