import { LOGIN, LOGOUT } from "./auth.types";
import authService from "../../services/auth.service";

export const login = (email, password) => async (dispatch) => {
	try {
		const { token, error } = await authService.loginUser(email, password);
		const me = await authService.me();
		console.log(me);
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
