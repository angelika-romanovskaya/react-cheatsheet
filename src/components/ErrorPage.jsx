import { Result, Button } from "antd";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<Result
			status="404"
			title={(error?.status || 404).toString()}
			subTitle="Страница не найдена"
			extra={[
				<Button key="back" onClick={() => navigate(-1)}>
					Вернуться назад
				</Button>,
				<Button key="home" type="primary">
					<Link to="/">На главную</Link>
				</Button>,
			]}
		/>
	);
};

export default ErrorPage;
