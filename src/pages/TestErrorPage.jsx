import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import ErrorComp from "../components/ErrorComp";

function TestErrorPage() {
	return (
		<>
			<Helmet>
				<title>Error Boundary Page</title>
				<meta
					name="description"
					content="This page test error boundary "
				/>
				<link rel="canonical" href="/test-errorboundary" />
			</Helmet>
			<Navbar />
			<ErrorComp />
		</>
	);
}

export default TestErrorPage;
