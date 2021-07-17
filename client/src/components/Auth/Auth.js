import React from 'react';
import { Grow, Container } from '@material-ui/core';
import AuthForm from './AuthForm';

const Auth = ({ setUser }) => {
	return (
		<Grow in>
			<Container maxWidth='xs'>
				<AuthForm setUser={setUser} />
			</Container>
		</Grow>
	);
};

export default Auth;
