import React from "react";

import styles from "../components/Counter.module.css";

import "../index.css";

function ErrorComp() {
	const throwErrorHandler = () => {
		throw new Error("=====ERROR======");
	};

	return (
		<section className="testing-page" style={{ width:"100%", minHeight: "70vh", display:"flex", flexDirection:"column", alignItem: "center", justifyContent:"center" }}>

			<h1 style={{ textAlign: "center", color:"rgb(0, 19, 128)" }}>Testing Error Boundary!</h1>
			<div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginTop:"5rem" }}>
			<button style={{ display:"flex", alignItems:"center", justifyContent:"center" }} className="errorBtn" onClick={throwErrorHandler}>
				Click to throw error
			</button>
			</div>

		</section>
	);
}

export default ErrorComp;
