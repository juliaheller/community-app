import {
	CREATE_COMMENT,
	GET_ALL_COMMENTS,
	DELETE_COMMENT,
} from "./comment.types.js";
import commentsService from "../../services/comments.service";

export const getAllComments = (postId, categoryId) => async (dispatch) => {
	try {
		const comments = await commentsService.getComments(postId, categoryId);
		if (comments) {
			dispatch({
				type: GET_ALL_COMMENTS,
				payload: {
					comments: comments,
				},
			});
			return Promise.resolve(comments);
		}
	} catch (error) {
		return Promise.reject();
	}
};

export const addComment = (comment, postId, categoryId) => async (dispatch) => {
	try {
		const newComment = await commentsService.createComment(
			comment,
			postId,
			categoryId
		);
		if (Comment) {
			dispatch({
				type: CREATE_COMMENT,
				payload: {
					comment: newComment,
					postId: postId,
					categoryId: categoryId,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject(comment);
	}
};

export const deleteOneComment = (id, categoryId, postId) => async (
	dispatch
) => {
	try {
		await commentsService.deleteComment(id, categoryId, postId);
		if (id) {
			dispatch({
				type: DELETE_COMMENT,
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};
