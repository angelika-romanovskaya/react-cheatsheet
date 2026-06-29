import { Layout, ConfigProvider, theme as antdTheme } from "antd";
import { useContext } from "react";

import Main from "./components/Main";

function App() {
	return (
		<ConfigProvider
			theme={{
				algorithm: antdTheme.defaultAlgorithm,
			}}
		>
			<Layout style={{ minHeight: "100vh" }}>
				<Main />
			</Layout>
		</ConfigProvider>
	);
}

export default App;
