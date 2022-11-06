import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";

import "../index.css";

function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>404 Page</title>
				<meta
					name="description"
					content="If you are here it means you the page you are looking for does not exist. Please go back to the home page."
				/>
				<link rel="canonical" href="/*" />
				<meta name="robots" content="noindex" />
			</Helmet>
			<Navbar />
			<section className="homeSection">
				<h1 className="homeText">404, Page Not Found!</h1>
			</section>
		</>
	);
}

export default NotFoundPage;
