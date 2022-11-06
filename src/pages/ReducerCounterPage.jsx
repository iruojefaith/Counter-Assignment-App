import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import ReducerCounter from "../components/ReducerCounter";

function CounterPage() {
	return (
		<>
			<Helmet>
				<title>Reducer Counter Page</title>
				<meta name="description" content="This is the page where the custom hook task is executed" />
				<link rel="canonical" href="/reducer-counter" />
			</Helmet>
			<Navbar />
			<ReducerCounter />
		</>
	);
}

export default CounterPage;
