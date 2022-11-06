import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Counter from "../components/Counter";

function CounterPage() {
	return (
		<>
			<Helmet>
				<title>Custom Hook Counter Page</title>
				<meta name="description" content="This is the page where the custom hook task is executed" />
				<link rel="canonical" href="/customhook-counter" />
			</Helmet>
			<Navbar />
			<Counter />
		</>
	);
}

export default CounterPage;