import React from 'react';
import {Row, Divider, Layout } from 'antd';
import { VideoCameraFilled} from "@ant-design/icons";
//import LoginBtn from "./../components/login/LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

const { loginWithRedirect } = useAuth0();
	return (
		<Layout className="login">
			<Row justify="center" align="middle" className="login-row">

				<h1 className="login-title">WatchIt</h1>
				<VideoCameraFilled className="icon"/>
			</Row>
			
			<Divider />

			<Row justify="center" align="middle" className="login-end">
				<h2>Entre para descobrir novos filmes incríveis!</h2>	
			</Row>

			<Row justify="center">
			<button onClick={() => loginWithRedirect()}>Log In</button>
			</Row>

		</Layout>
	);
};

export default Login;