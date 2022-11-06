import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<span className={styles.navbar__link__container}>
				<NavLink
					className={(navData) => (navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`)}
					to="/home"
				>
					Home
				</NavLink>
			</span>
			<span className={styles.navbar__link__container}>
				<NavLink
					className={(navData) => (navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`)}
					to="/customhook-counter"
				>
					Customhook Counter
				</NavLink>
			</span>
			<span className={styles.navbar__link__container}>
				<NavLink
					className={(navData) => (navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`)}
					to="/reducer-counter"
				>
					Reducer Counter
				</NavLink>
			</span>
			<span className={styles.navbar__link__container}>
				<NavLink
					className={(navData) => (navData.isActive ? `${styles.active} ${styles.navbar__link}` : `${styles.navbar__link}`)}
					to="/test-errorboundary"
				>
					Test Error
				</NavLink>
			</span>
		</nav>
	);
}

export default Navbar;
