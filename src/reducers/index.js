import { combineReducers } from "redux";
// to use redux form it must be imported and combined with key name "form"
import { reducer as formReducer } from "redux-form";

import postReducer from "./postReducer";

export default combineReducers({
	posts: postReducer,
	form: formReducer,
});
