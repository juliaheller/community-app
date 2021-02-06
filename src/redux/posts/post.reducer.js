import {
	UPDATE_POST,
	GET_ONE_POST,
	GET_ALL_POSTS,
	DELETE_POST,
} from "./post.types";

const initialState = {
	post: {},
	id: 0,
	categoryId: 0,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE_POST: {
			const { post, id, categoryId } = action.payload;
			return {
				...state,
				post: post,
				id: id,
				categoryId: categoryId,
			};
		}
		case GET_ONE_POST: {
			const { post } = action.payload;
			return {
				...state,
				post: post,
			};
		}
		case GET_ALL_POSTS: {
			const { posts } = action.payload;
			return {
				...state,
				posts: posts,
			};
		}
		case DELETE_POST: {
			return {
				...state,
			};
		}
		default:
			return state;
	}
}
