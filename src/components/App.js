import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Posts from "./Posts";
import Form from "./Form";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Route path="/" exact component={Posts} />
			<Route path="/form" exact component={Form} />
		</BrowserRouter>
	);
};

export default App;
