import { Button, Space } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { topics } from "../data/topics";
import { useMemo } from "react";

const NavigationButtons = ({ title }) => {
	const currentIndex = useMemo(
		() => topics.findIndex((topic) => topic.title === title),
		[title],
	);

	const prev = useMemo(
		() => (currentIndex > 0 ? topics[currentIndex - 1] : null),
		[currentIndex],
	);
	const next = useMemo(
		() => (currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null),
		[currentIndex],
	);

	return (
		<Space
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "space-between",
				marginTop: 32,
			}}
		>
			{prev ? (
				<Button icon={<ArrowLeftOutlined />}>
					<Link to={`/topic/${prev.path}`}>{prev.title}</Link>
				</Button>
			) : (
				<span />
			)}

			{next && (
				<Button
					type="primary"
					icon={<ArrowRightOutlined />}
					iconPlacement="end"
				>
					<Link to={`/topic/${next.path}`}>{next.title}</Link>
				</Button>
			)}
		</Space>
	);
};

export default NavigationButtons;
