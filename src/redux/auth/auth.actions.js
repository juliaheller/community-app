import { LOGIN, LOGOUT } from "./auth.types";
import authService from "../../services/auth.service";

export const login = (email, password) => async (dispatch) => {
	try {
		const { token, error } = await authService.loginUser(email, password);
		if (token) {
			dispatch({
				type: LOGIN,
				payload: { isLoggedIn: true, me: {} }
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
