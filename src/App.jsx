import { Layout, ConfigProvider, theme as antdTheme } from "antd";
import { useContext } from "react";

import Main from "./components/Main";
import { Context } from "./components/ThemeContext";

function App() {
	const { theme } = useContext(Context);

	return (
		<ConfigProvider
			theme={{
				algorithm:
					theme === "dark"
						? antdTheme.darkAlgorithm
						: antdTheme.defaultAlgorithm,
			}}
		>
			<Layout style={{ minHeight: "100vh" }}>
				<Main />
			</Layout>
		</ConfigProvider>
	);
}

export default App;
