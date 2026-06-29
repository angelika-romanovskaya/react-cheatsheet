import { useState, useEffect, createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App.jsx";
import Topic from "./Topic";
import ErrorPage from "./ErrorPage";
import { topics } from "../data/topics.js";

const Context = createContext();

const ThemeContext = (props) => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((theme) => (theme === "dark" ? "light" : "dark"));
	};

	const router = createBrowserRouter([
		{
			path: "*",
			element: <ErrorPage />,
		},
		{
			path: "/topic",
			element: <App />,
			children: topics.map((topic) => {
				const { path, title, content } = topic;
				return {
					path: path,
					element: <Topic title={title} content={content} />,
				};
			}),
		},
	]);

	const ctx = {
		theme,
		toggleTheme,
	};
	return (
		<Context.Provider value={ctx}>
			<RouterProvider router={router}>{props.children}</RouterProvider>
		</Context.Provider>
	);
};

export { ThemeContext, Context };
