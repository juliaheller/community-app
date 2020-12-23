import { LOGIN, LOGOUT } from "./auth.types";
import authService from "../../services/auth.service";

export const login = (email, password) => async (dispatch) => {
	// To do: use auth service
	debugger;
	try {
		const { token, error } = await authService.loginUser(email, password);
		if (token) {
			const payload = { isLoggedIn: true, me: {} };
			dispatch({ type: LOGIN, payload: payload });
			localStorage.setItem("token", token);
			return Promise.resolve();
		} else {
			return Promise.reject(error);
		}
	} catch (error) {
		return Promise.reject();
	}
};
