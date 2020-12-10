import React from "react";
// <Link to="/"> is equivalent to <a href="/"> in react routing world (SPA)
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Link to="/">Posts</Link>
			<Link to="/form" style={{ marginLeft: 10 }}>
				Form
			</Link>
		</div>
	);
};

export default Header;
