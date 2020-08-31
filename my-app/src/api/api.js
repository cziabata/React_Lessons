import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "api-key": "6847b8b0-6480-41e7-80b9-70115535fc82"
        },
    
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
    },
}