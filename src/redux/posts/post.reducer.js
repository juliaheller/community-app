import { UPDATE, GET_ONE } from "./post.types";

const initialState = {
	post: {},
	id: 0,
	categoryId: 0,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE: {
			const { post, id, categoryId } = action.payload;
			return {
				...state,
				post: post,
				id: id,
				categoryId: categoryId,
			};
		}
		case GET_ONE: {
			const { post } = action.payload;
			return {
				...state,
				post: post,
			};
		}
		default:
			return state;
	}
}
