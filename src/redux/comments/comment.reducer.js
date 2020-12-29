import {
	CREATE_COMMENT,
	GET_ALL_COMMENTS,
	DELETE_COMMENT,
} from "./comment.types";

const initialState = {
	comments: [],
	PostId: 0,
	categoryId: 0,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CREATE_COMMENT: {
			const { comment, postId, categoryId } = action.payload;
			return {
				...state,
				comment: comment,
				postId: postId,
				categoryId: categoryId,
			};
		}
		case GET_ALL_COMMENTS: {
			const { comments } = action.payload;
			return {
				...state,
				comments: comments,
			};
		}
		case DELETE_COMMENT: {
			return {
				...state,
			};
		}

		default:
			return state;
	}
}
