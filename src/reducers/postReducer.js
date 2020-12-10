/* eslint-disable import/no-anonymous-default-export */
import { FETCH_POSTS } from "../actions/types";

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return [...state, ...action.payload];
		default:
			return state;
	}
};
