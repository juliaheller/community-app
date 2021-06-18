import {
	CREATE_COMMENT,
	GET_ALL_COMMENTS,
	DELETE_COMMENT,
} from "./comment.types";

const initialState = {
	comments: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CREATE_COMMENT: {
			const { comment } = action.payload;

			return {
				comments: [...state.comments, comment],
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
			const { id } = action.payload;
			console.log(id);
			return {
				...state,
				comments: state.comments.filter((comment) => comment.id !== id),
			};
		}

		default:
			return state;
	}
}
