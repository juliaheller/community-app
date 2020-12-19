import auth from "../helper/auth";
require("dotenv").config();

const apiURL = process.env.REACT_APP_API_URL + "/categories";

export default {
    async getAll() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...auth.getAuthHeader(),
            },
        };
        const response = await fetch(apiURL, requestOptions);
        return await response.json();
    },
    async getOne(id) {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...auth.getAuthHeader(),
            },
        };
        const response = await fetch(apiURL + "/" + id + "/", requestOptions);

        return await response.json();
    },
    async createCatgory(name) {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
            }),
        };
        const response = await fetch(apiURL, requestOptions);
        return await response.json();
    },
};
