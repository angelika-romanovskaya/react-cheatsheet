import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { topics } from "../data/topics";

const NavigationLinks = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<Menu
			style={{ padding: "16px 0" }}
			mode="inline"
			selectedKeys={[location.pathname.split("/")[2]]}
			items={topics.map((topic) => ({
				key: topic.path,
				label: topic.title,
			}))}
			onClick={({ key }) => navigate(key)}
		/>
	);
};

export default NavigationLinks;
