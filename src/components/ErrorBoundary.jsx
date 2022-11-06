import { Component } from "react";


class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<h2 style={{ color: "red", marginBottom: "30px" }}>OOOOPS!!!, Something went wrong!</h2>
					<a href="/home" style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}>
						Back to Home
					</a>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
