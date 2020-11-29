import auth from "../helper/auth";
require("dotenv").config();

const apiURL = process.env.REACT_APP_API_URL + "/users";

export default {
    async getAll() {
        const response = await fetch("https://hexen-api.herokuapp.com/users");
        return await response.json();
    },
    async getOne(id) {
        const response = await fetch(
            "https://hexen-api.herokuapp.com/users/" + id + "/"
        );

        return await response.json();
    },
    async createUser(email, password, name, surname) {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...auth.getAuthHeader(),
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                surname: surname,
            }),
        };
        const response = await fetch(apiURL, requestOptions);
        return await response.json();
    },
};
