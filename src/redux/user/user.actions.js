import { UPDATE, GET_ONE } from "./user.types.js";
import userService from "../../services/user.service";

export const getUser = (id) => async (dispatch) => {
	try {
		const user = await userService.getOne(id);
		if (user) {
			dispatch({
				type: GET_ONE,
				payload: {
					id: id,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};

export const updateUser = (id, user) => async (dispatch) => {
	try {
		const updatedUser = await userService.updateUser(id, user);
		if (user) {
			dispatch({
				type: UPDATE,
				payload: {
					id: id,
					user: updatedUser,
				},
			});
			return Promise.resolve();
		}
	} catch (error) {
		return Promise.reject();
	}
};
