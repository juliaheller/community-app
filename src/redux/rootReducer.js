import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import authReducer from "./auth/auth.reducer";
import postReducer from "./posts/post.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	post: postReducer,
});

export default rootReducer;
