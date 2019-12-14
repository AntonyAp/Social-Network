import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials : true,
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    headers : {
        "API-KEY" : "79337f49-9470-4507-836d-ffe40196ced5"
    }
});

export const usersApi = {
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response =>
                response.data
            )
    },
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>
                response.data
            )
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
            .then(response =>
                response.data
            )
    }
};

export const profileApi = {
    getProfile(userId){
        return axiosInstance.get(`profile/${userId}`)
            .then(response =>
                response.data)
    },
    getStatus(userId){
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response =>
                response.data)
    },
    updateStatus(status){
        return axiosInstance.put(`profile/status`, { status }).then(response =>
            response.data);
    }
};

export const authApi = {
    getAuthInfo(){
        return axiosInstance.get(`auth/me`)
            .then(response =>
                response.data
            )
    }
};




