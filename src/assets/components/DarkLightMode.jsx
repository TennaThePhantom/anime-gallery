import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "../CSS/DarkLightMode.css";
import { useState, useEffect } from "react";

function DarkLightMode() {
	// State to manage dark mode basically if darkMode is true then dark mode is enabled otherwise light mode is enabled
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const checkUserPreference = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDarkMode(checkUserPreference);
			if (checkUserPreference) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}
	}, []);

	const toggleDarkMode = () => {
        const newMode = !isDarkMode
		setIsDarkMode(newMode);

		if (newMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<div className="darkLightMode" onClick={toggleDarkMode}>
			{isDarkMode ? (
				<MdLightMode className="DLM-icon" /> // shows light mode icon when dark mode is enabled
			) : (
				<MdDarkMode className="DLM-icon" /> // shows dark mode icon when light mode is enabled
			)}
		</div>
	);
}

export default DarkLightMode;
