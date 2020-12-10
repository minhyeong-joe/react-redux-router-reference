import jsonPlaceholder from "../apis/JsonPlaceholder";
import { FETCH_POSTS } from "./types";

// immediate dispatch
// export const

// async dispatch
export const fetchPosts = () => async (dispatch) => {
	const { data } = await jsonPlaceholder.get("/posts");
	dispatch({ type: FETCH_POSTS, payload: data });
};
