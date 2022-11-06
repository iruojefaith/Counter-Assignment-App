export const initialState = {
	count: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: Number(state.count) + 1 };

		case "DECREMENT":
			return { count: Number(state.count) - 1 };

		case "RESET":
			return { count: 0 };

		case "SET VALUE":
			return { count: Number(action.value) };

		default:
			return Number(state);
	}
};

export default reducer;
