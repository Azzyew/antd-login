import React from 'react';
import {Row, Divider } from 'antd';
import LoginBtn from "./../components/login/LoginBtn";

const Login = () => {

	return (
		<Row justify='center' align='middle'>

				<h1 className='login-title'>WatchIt</h1>

				<h2>Entre para descobrir novos filmes incríveis!</h2>

				<Divider />

				<Row justify='center'>
					{LoginBtn}
				</Row>
		</Row>
	);
};

export default Login;