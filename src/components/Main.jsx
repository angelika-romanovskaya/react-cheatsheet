import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

const { Sider, Content } = Layout;

const Main = () => {
	return (
		<Layout style={{ height: "calc(100vh - 64px)" }}>
			<Sider
				width={250}
				breakpoint="lg"
				collapsedWidth={80}
				style={{
					height: "100%",
					overflowY: "auto",
				}}
			>
				<NavigationLinks />
			</Sider>

			<Layout>
				<Content
					style={{
						height: "100%",
						overflowY: "auto",
						padding: 24,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default Main;
