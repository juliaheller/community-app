import { UPDATE } from "./user.types.js";

export const updateUser = (id, user) => ({
	type: UPDATE,
	payload: {
		id: id,
		user,
	},
});
