import { LOGIN, LOGOUT } from "./auth.types";

const initialState = {
	isLoggedIn: false,
	me: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			const { isLoggedIn, me } = action.payload;
			return { ...state, isLoggedIn: isLoggedIn, me: me };
		default:
			return state;
	}
}
