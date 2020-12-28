import { UPDATE, GET_ONE } from "./post.types.js";
import postsService from "../../services/posts.service";

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

export const updatePost = (post, id, categoryId) => async (dispatch) => {
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
