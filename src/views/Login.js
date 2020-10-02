import React from 'react';
import {Row, Divider, Layout, Button, PageHeader } from 'antd';
import { VideoCameraFilled, GithubOutlined } from "@ant-design/icons";
//import LoginBtn from "./../components/login/LoginBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

const { loginWithRedirect } = useAuth0();
	return (
		<Layout className="login">
			<Row justify="center" align="middle">
				<PageHeader className="header">
					<div className="header-content">
						<h3>WatchIt - The #1 movie platform<VideoCameraFilled/></h3>
						<a href="https://github.com/Azzyew"><GithubOutlined /></a>
					</div>
				</PageHeader>
			</Row>
			<Row justify="center" align="middle" className="login-row">

				<h1 className="login-title">WatchIt</h1>
				<VideoCameraFilled className="icon"/>
			</Row>
			
			<Divider />

			<Row justify="center" align="middle" className="login-end">
				<h2>Entre para descobrir novos filmes incríveis!</h2>	
			</Row>

			<Row justify="center">
				<Button className="login-btn" type="primary" onClick={() => loginWithRedirect()}>Login</Button>
			</Row>
		</Layout>
	);
};

export default Login;