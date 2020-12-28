import { CREATE, GET_ALL, DELETE } from "./comment.types";

const initialState = {
	comments: [],
	PostId: 0,
	categoryId: 0,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CREATE: {
			const { comment, postId, categoryId } = action.payload;
			return {
				...state,
				comment: comment,
				postId: postId,
				categoryId: categoryId,
			};
		}
		case GET_ALL: {
			const { comments } = action.payload;
			return {
				...state,
				comments: comments,
			};
		}
		case DELETE: {
			const { id, categoryId, postId } = action.payload;
			return {
				...state,
				id: id,
				postId: postId,
				categoryId: categoryId,
			};
		}

		default:
			return state;
	}
}
