// functional component using redux
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../actions";

const Posts = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	console.log("Fetched Posts:", posts);

	return (
		<div>
			<h1>Posts</h1>
		</div>
	);
};

export default Posts;
