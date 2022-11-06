import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import "../index.css";

function HomePage() {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
				<meta name="description" content="Home page of the Tunji's Altschool africa ReactJs examp project" />
				<link rel="canonical" href="/home" />
			</Helmet>
			<Navbar />
			<section className="homeSection">
				<h1 className="homeText">Welcome</h1>
				<p></p>
			</section>

		</>
	);
}

export default HomePage;
