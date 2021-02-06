import { LOGIN, LOGOUT } from "./auth.types";
import authService from "../../services/auth.service";

export const login = (email, password) => async (dispatch) => {
	let me;
	try {
		const { token, error } = await authService.loginUser(email, password);
		if (token) {
			localStorage.setItem("token", token);
			me = await authService.me();
		}

		if (token && me) {
			dispatch({
				type: LOGIN,
				payload: { isLoggedIn: true, me: me },
			});
			return Promise.resolve();
		} else {
			return Promise.reject(error);
		}
	} catch (error) {
		return Promise.reject();
	}
};
export const loginFromLocalStorage = () => async (dispatch) => {
	try {
		if (localStorage.getItem("token")) {
			const me = await authService.me();
			dispatch({
				type: LOGIN,
				payload: { isLoggedIn: true, me: me },
			});
		} else {
			localStorage.removeItem("token");
			dispatch({ type: LOGOUT });
		}
	} catch (error) {
		localStorage.removeItem("token");
		dispatch({ type: LOGOUT });
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem("token");
	dispatch({ type: LOGOUT });
};
