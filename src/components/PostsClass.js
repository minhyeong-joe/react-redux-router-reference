// class component using redux
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostsClass extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		console.log("fetched Posts:", this.props.posts);
		return (
			<div>
				<h3>Class-based Posts</h3>
			</div>
		);
	}
}

// map store state to the component props
const mapStateToProps = (state) => {
	return { posts: state.posts };
};

// wire up redux state and dispatch actions to props
export default connect(mapStateToProps, { fetchPosts })(PostsClass);
