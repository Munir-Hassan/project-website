import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import InputField from '../InputComponent/InputField';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
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
	const classes = useStyles();
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

	const googleSuccess = async (response) => {
		console.log(response);
		const { profileObj: { email, givenName, familyName, googleId, imageUrl } } = response;
		setAuthForm({
			firstname: givenName,
			lastname: familyName,
			email: email,
			password: googleId,
			image: imageUrl
		});
		try {
			await api
				.post(`/user/auth/signin`, authForm)
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

	const googleFailure = (response) => {
		console.log(response);
		console.log('google sign in error!');
		// alert('google login error!');
	};
	return (
		<Paper elevation={4} className={classes.paperForm}>
			<Typography align='center' gutterBottom variant='h4'>
				{isSignUp ? 'Sign Up' : 'Log In'}
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
					className={classes.button}
				>
					{isSignUp ? 'Sign Up' : 'Log In'}
				</Button>
				<div style={{ paddingTop: '0.5rem' }}>
					<GoogleLogin
						clientId='159725840776-jofq9pf8rp7f0527nktop41erj6cbiug.apps.googleusercontent.com'
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy={'single_host_origin'}
						render={(renderProps) => (
							<Button
								type='button'
								fullWidth
								variant='contained'
								onClick={renderProps.onClick}
								// disabled={renderProps.disabled}
								size='small'
								startIcon={<FcGoogle />}
							>
								Google Login
							</Button>
						)}
					/>
				</div>
				<Button
					type='button'
					fullWidth
					variant='text'
					onClick={switchMode}
					size='small'
					className={classes.button}
				>
					{isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign Up"}
				</Button>
			</form>
		</Paper>
	);
};

export default AuthForm;
