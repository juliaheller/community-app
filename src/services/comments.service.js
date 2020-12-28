import auth from "../helper/auth";
require("dotenv").config();

const apiURL = process.env.REACT_APP_API_URL + "/categories";

export default {
	async getComments(postId, categoryId) {
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts/${postId}/comments`,
			requestOptions
		);
		return await response.json();
	},

	async createComment(comment, postId, categoryId) {
		console.log(comment);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
			body: JSON.stringify(comment),
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts/${postId}/comments`,
			requestOptions
		);
		return await response.json();
	},

	async deleteComment(id, categoryId, postId) {
		const requestOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				...auth.getAuthHeader(),
			},
		};
		const response = await fetch(
			`${apiURL}/${categoryId}/posts/${postId}/comments/${id}`,
			requestOptions
		);

		return await response.json();
	},
};
