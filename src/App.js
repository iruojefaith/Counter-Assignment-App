import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestErrorPage from "./pages/TestErrorPage";
import ReducerCounterPage from "./pages/ReducerCounterPage";

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/customhook-counter" element={<CounterPage />} />
					<Route path="/reducer-counter" element={<ReducerCounterPage />} />
					<Route path="/test-errorboundary" element={<TestErrorPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
