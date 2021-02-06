import auth from "../helper/auth";
require("dotenv").config();

const apiURL = process.env.REACT_APP_API_URL + "/categories";

export default {
	async getAllPosts(categoryId) {
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts`,
			requestOptions
		);
		return await response.json();
	},
	async getOnePost(id, categoryId) {
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts/${id}`,
			requestOptions
		);

		return await response.json();
	},
	async createPost(categoryId, post) {
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
			body: JSON.stringify(post),
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts`,
			requestOptions
		);
		return await response.json();
	},
	async updatePost(post, id, categoryId) {
		const requestOptions = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
			body: JSON.stringify(post),
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts/${id}`,
			requestOptions
		);
		return await response.json();
	},
	async deletePost(id, categoryId) {
		const requestOptions = {
			method: "DELETE",
			headers: {
				...auth.getAuthHeader(),
			},
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts/${id}`,
			requestOptions
		);

		return await response.json();
	},
};
