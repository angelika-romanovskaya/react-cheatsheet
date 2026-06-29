import { Fragment, useEffect, useContext } from "react";
import Prism from "prismjs";
import NavigationButtons from "./NavigationButtons";
import { Context } from "./ThemeContext";
import "prismjs/themes/prism-tomorrow.css";

const Topic = ({ title, content = [] }) => {
	const { theme } = useContext(Context);

	const parseContent = (content) => {
		return content.map((item) => {
			const [[tag, text]] = Object.entries(item);
			switch (tag) {
				case "text": {
					return <p>{text}</p>;
				}
				case "title": {
					return <h3>{text}</h3>;
				}
				case "code": {
					return (
						<pre style={{ width: "100%" }}>
							<code
								style={{
									color: "black",
									fontStyle: "italic",
									padding: 16,
									display: "block",
									backgroundColor: "rgba(1, 1, 1, 0.1)",
								}}
							>
								{text}
							</code>
						</pre>
					);
				}
				case "list": {
					return (
						<ul style={{ marginLeft: 18 }}>
							{text.map((i) => (
								<li key={i}>{i}</li>
							))}
						</ul>
					);
				}
				default: {
					return JSON.stringify(text);
				}
			}
		});
	};

	return (
		<div className={`topic ${theme}`}>
			<h1>{title}</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: 3,
				}}
			>
				{parseContent(content).map((c, i) => (
					<Fragment key={i}>{c}</Fragment>
				))}
			</div>
			<NavigationButtons title={title} />
		</div>
	);
};

export default Topic;
