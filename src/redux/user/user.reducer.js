import { UPDATE, GET_ONE } from "./user.types";

const initialState = {
	user: {},
	id: 0,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case UPDATE: {
			const { id, user } = action.payload;
			return {
				...state,
				id: id,
				user: user,
			};
		}
		case GET_ONE: {
			const { user } = action.payload;
			return {
				...state,
				user: user,
			};
		}
		default:
			return state;
	}
}
