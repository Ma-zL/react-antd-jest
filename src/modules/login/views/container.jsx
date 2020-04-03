import React from "react";
import "../styles/style.less";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import * as constants from "../funcs/constants";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { I18n } from "react-i18nify";

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundUrl: "./static/media/background.jpg"
		};
	}

	componentDidUpdate(prevProps) {
		if (
			!_.isEqual(prevProps.loginSuccess, this.props.loginSuccess) &&
			prevProps.loginSuccess
		) {
			// const history = this.props.history;
			// history.push("/mainDashboard");
			window.location.hash = "/mainDashboard";
		}
	}

	onFinish = values => {
		const formData = new FormData();
		formData.append("name", values.username);
		formData.append("password", values.password);
		this.props.loginRequest(formData);
	};

	render() {
		const { backgroundUrl } = this.state;
		return (
			<div
				className="login_cont"
				style={{
					background: `transparent url(${backgroundUrl}) 100% 100% no-repeat`,
					backgroundSize: "cover"
				}}
			>
				<Form
					name="normal_login"
					className="login_form"
					initialValues={{
						remember: true
					}}
					onFinish={this.onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: I18n.t("login.usernameMsg")
							}
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder={I18n.t("login.username")}
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: I18n.t("login.passwordMsg")
							}
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder={I18n.t("login.password")}
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
							noStyle
						>
							<Checkbox>{I18n.t("login.rememberMe")}</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							{I18n.t("login.forgotPassword")}
						</a>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							onClick={this.callLogin}
						>
							{I18n.t("login.loginButton")}
						</Button>
						Or <a href="">{I18n.t("login.registerNow")}</a>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

Login.propTypes = {
	backgroundUrl: PropTypes.string,
	loginSuccess: PropTypes.bool,
	history: PropTypes.object,
	loginRequest: PropTypes.func
};

Login.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
	return {
		loginSuccess:
			state[constants.REDUCER_NAME] &&
			state[constants.REDUCER_NAME].loginSuccess
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loginRequest: loginPost => {
			dispatch(constants.loginAction(loginPost));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Login));
