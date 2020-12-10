import jsonPlaceholder from "../apis/JsonPlaceholder";
import { FETCH_POSTS } from "./types";

// async dispatch
export const fetchPosts = () => async (dispatch) => {
	const { data } = await jsonPlaceholder.get("/posts");
	dispatch({ type: FETCH_POSTS, payload: data });
};
