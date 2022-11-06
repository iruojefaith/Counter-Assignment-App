import React, { useReducer, useRef } from "react";

import styles from "./Counter.module.css";
import reducer, { initialState } from "./reducer";
import useCounter from "../hooks/useCounter";

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const inputRef = useRef();
	const { incrementHandler, decrementHandler, resetHandler, setValueHandler } = useCounter(dispatch, inputRef);

	return (
		<main className={styles.counter}>
			<h1 className={styles.counterText}>The Custom Hook Counter Value = {state.count}</h1>
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

export default Counter;
