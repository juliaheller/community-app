import { LOGIN, LOGOUT } from "./auth.types";
import authService from "../../services/auth.service";

export const login = (email, password) => async (dispatch) => {
	try {
		const { token, error } = await authService.loginUser(email, password);
		const me = await authService.me();
		if (token && me) {
			dispatch({
				type: LOGIN,
				payload: { isLoggedIn: true, me: me },
			});
			localStorage.setItem("token", token);

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
			dispatch({
				type: LOGIN,
				payload: { isLoggedIn: false, me: {} },
			});
			localStorage.removeItem("token");
		}
	} catch (error) {
		dispatch({
			type: LOGIN,
			payload: { isLoggedIn: false, me: {} },
		});
		localStorage.removeItem("token");
	}
};

// export const logout = () {};
