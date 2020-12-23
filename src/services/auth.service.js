import auth from "../helper/auth";
require("dotenv").config();

const apiURL = process.env.REACT_APP_API_URL + "/auth";

export default {
	async loginUser(email, password) {
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		};
		const response = await fetch(apiURL + "/login", requestOptions);
		return await response.json();
	},

	async me() {
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
		};
		const response = await fetch(apiURL + "/me", requestOptions);
		return await response.json();
	},
};
