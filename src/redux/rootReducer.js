import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import authReducer from "./auth/auth.reducer";
import postReducer from "./posts/post.reducer";
import commentReducer from "./comments/comment.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	auth: authReducer,
	post: postReducer,
	comments: commentReducer,
});

export default rootReducer;
