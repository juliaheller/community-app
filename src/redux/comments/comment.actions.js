import { CREATE, GET_ALL, DELETE } from "./comment.types.js";
import commentsService from "../../services/comments.service";

export const getAllComments = (postId, categoryId) => async (dispatch) => {
	try {
		const comments = await commentsService.getComments(postId, categoryId);
		if (comments) {
			dispatch({
				type: GET_ALL,
				payload: {
					comments: comments,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};

export const addComment = (comment, postId, categoryId) => async (dispatch) => {
	try {
		const updatedComment = await commentsService.createComment(
			comment,
			postId,
			categoryId
		);
		if (Comment) {
			dispatch({
				type: CREATE,
				payload: {
					comment: updatedComment,
					postId: postId,
					categoryId: categoryId,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};

export const deleteOneComment = (id, categoryId, postId) => async (
	dispatch
) => {
	try {
		await commentsService.deleteComment(id, categoryId, postId);
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
