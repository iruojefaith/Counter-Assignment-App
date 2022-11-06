import React, { useReducer, useRef } from "react";

import styles from "./Counter.module.css";
import reducer, { initialState } from "./reducer";

function ReducerCounter() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const inputRef = useRef();

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

	return (
		<main className={styles.counter}>
			<h1 className={styles.counterText}>The Reducer Counter Value is: {state.count}</h1>
			<div className={styles.counterBtnContainer}>
				<button className={styles.counterBtn} onClick={incrementHandler}>
					Increment
				</button>
				<button className={styles.counterBtn} onClick={decrementHandler}>
					Decrement
				</button>
				<button className={styles.counterBtn} onClick={resetHandler}>
					Reset
				</button>
				<div>
					<input className={styles.counterInput} type="number" ref={inputRef} />
					<button className={styles.counterBtn} onClick={setValueHandler}>
						Set Value
					</button>
				</div>
			</div>
		</main>
	);
}

export default ReducerCounter;
