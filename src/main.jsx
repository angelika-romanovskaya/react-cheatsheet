import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Topic from "./components/Topic";
import { topics } from "./data/topics";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Navigate to={"/topic"} replace /> },
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
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>,
);
