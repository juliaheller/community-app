import { UPDATE, GET_ONE, GET_ALL, DELETE } from "./post.types.js";
import postsService from "../../services/posts.service";

export const getPosts = (categoryId) => async (dispatch) => {
	try {
		const posts = await postsService.getAllPosts(categoryId);
		if (posts) {
			dispatch({
				type: GET_ALL,
				payload: {
					posts: posts,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};

export const getPost = (id, categoryId) => async (dispatch) => {
	try {
		const post = await postsService.getOnePost(id, categoryId);
		if (post) {
			dispatch({
				type: GET_ONE,
				payload: {
					post: post,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};

export const updateAPost = (post, id, categoryId) => async (dispatch) => {
	try {
		const updatedPost = await postsService.updatePost(post, id, categoryId);
		if (post) {
			dispatch({
				type: UPDATE,
				payload: {
					post: updatedPost,
					id: id,
					categoryId: categoryId,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};
export const deleteOnePost = (id, categoryId) => async (dispatch) => {
	try {
		await postsService.deletePost(id, categoryId);
		if (id) {
			dispatch({
				type: DELETE,
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};
