function useCounter(dispatch, inputRef) {
	const incrementHandler = () => {
		dispatch({
			type: "INCREMENT",
		});
	};

	const decrementHandler = () => {
		dispatch({
			type: "DECREMENT",
		});
	};

	const resetHandler = () => {
		dispatch({
			type: "RESET",
		});
	};

	const setValueHandler = () => {
		if (inputRef.current.value) {
			dispatch({
				type: "SET VALUE",
				value: inputRef.current.value,
			});

			inputRef.current.value = "";
		}

		return;
	};

	return {
		incrementHandler,
		decrementHandler,
		resetHandler,
		setValueHandler,
	};
}

export default useCounter;
