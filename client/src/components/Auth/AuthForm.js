import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import InputField from '../InputComponent/InputField';
import api from '../../APIs';
import useStyles from './styles';

const initialAuthFormState = {
	firstname: '',
	lastname: '',
	email: '',
	password: ''
};

const AuthForm = ({ setUser }) => {
	const history = useHistory();
	const classess = useStyles();
	const [ authForm, setAuthForm ] = useState(initialAuthFormState);
	const [ isSignUp, setIsSignUp ] = useState(true);
	const [ showPassword, setShowPassword ] = useState(false);
	const handleInputChange = (e) => {
		setAuthForm({ ...authForm, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const switchMode = () => {
		setIsSignUp((prevIsSignup) => !prevIsSignup);
		setShowPassword(false);
	};

	const handleAuthFormSubmit = async (event) => {
		event.preventDefault();
		console.log(authForm);
		try {
			await api
				.post(`/user/auth/${isSignUp ? 'signup' : 'signin'}`, authForm)
				.then((response) => {
					console.log('authFrom Income data: ');
					console.log(response.data.result);
					localStorage.setItem('userProfile', JSON.stringify(response.data.result));
					history.push('/donate');
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log('inside authForm');
			console.log(error);
		}
	};
	return (
		<Paper elevation={4} className={classess.paperForm}>
			<Typography align='center' gutterBottom variant='h4'>
				{isSignUp ? 'Sign Up' : 'Sign In'}
			</Typography>
			<form method='POST' onSubmit={handleAuthFormSubmit}>
				<Grid container spacing={2}>
					{isSignUp && (
						<React.Fragment>
							<InputField
								name='firstname'
								label='First Name'
								type='text'
								autoFocus
								half
								handleChange={handleInputChange}
							/>
							<InputField
								name='lastname'
								label='Last Name'
								type='text'
								half
								handleChange={handleInputChange}
							/>
						</React.Fragment>
					)}

					<InputField name='email' label='Email' type='email' handleChange={handleInputChange} />
					<InputField
						name='password'
						label='Password'
						handleChange={handleInputChange}
						type={showPassword ? 'text' : 'password'}
						handleShowPassword={handleShowPassword}
					/>
				</Grid>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					size='medium'
					className={classess.button}
				>
					{isSignUp ? 'Sign Up' : 'Sign In'}
				</Button>
				<Button
					type='button'
					fullWidth
					variant='contained'
					onClick={switchMode}
					size='small'
					className={classess.button}
				>
					{isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
				</Button>
			</form>
		</Paper>
	);
};

export default AuthForm;
