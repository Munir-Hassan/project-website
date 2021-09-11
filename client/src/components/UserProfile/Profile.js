import React from 'react';
import { Container, Grow, Paper, Grid, Button, CircularProgress, Typography } from '@material-ui/core';
import useStyles from './styles';
import img from '../../images/img_avatar.png';

const Profile = () => {
	const classes = useStyles();
	return (
		<Grow in>
			<Container>
				<div style={{ flexGrow: 1, marginTop: '4rem' }}>
					<Grid container>
						<Grid
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								// justifyContent: 'center',
								// border: '1px solid black',
								// backgroundColor: '#4faf4e',
								// backgroundColor: 'rgba(150, 211, 149, 0.8)',
								borderTopLeftRadius: '1rem',
								borderBottomLeftRadius: '1rem',
								padding: 10,
								paddingRight: 5
							}}
							item
							xs={4}
						>
							<Paper
								elevation={3}
								style={{
									backgroundColor: 'rgba(150, 211, 149, 0.8)',
									borderRadius: '1rem',
									width: '90%',
									padding: '1rem',
									margin: '2rem 0',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Typography>left</Typography>
							</Paper>
						</Grid>
						<Grid
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								// justifyContent: 'center',
								// border: '1px solid black',
								// backgroundColor: '#4faf4e',
								// backgroundColor: 'rgba(150, 211, 149, 0.8)',
								borderTopRightRadius: '1rem',
								borderBottomRightRadius: '1rem',
								padding: 10,
								paddingLeft: '0',
								paddingRight: '0'
							}}
							item
							xs={8}
						>
							<Paper
								elevation={3}
								style={{
									borderRadius: '1rem',
									width: '90%',
									padding: '1rem',
									margin: '2rem 0',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Typography>Right</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Container>
		</Grow>
	);
};

export default Profile;
