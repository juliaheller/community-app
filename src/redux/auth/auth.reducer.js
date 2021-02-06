import { LOGIN, LOGOUT } from "./auth.types";

const initialState = {
	isLoggedIn: true,
	me: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			const { isLoggedIn, me } = action.payload;
			return { ...state, isLoggedIn: isLoggedIn, me: me };
		case LOGOUT:
			return { ...state, isLoggedIn: false, me: {} };
		default:
			return state;
	}
}
