import React from 'react';
import { Container, Grow, Paper, Grid, Button, CircularProgress, Typography } from '@material-ui/core';
import useStyles from './styles';
import img from '../../images/img_avatar.png';

const Profile = () => {
	const classes = useStyles();
	return (
		<Grow in>
			<Container>
				<div className={classes.profileContainer}>
					<div className={classes.profileLeft}>
						<h1>profile left</h1>
						<Paper elevation={4} variant='elevation' className={classes.paperForm}>
							<img
								src={img}
								alt='profile avatar'
								style={{ width: '50%', height: '50%', borderRadius: '50%' }}
							/>
							<Typography>Profile Name</Typography>
						</Paper>
					</div>
					<div className={classes.profileRight}>
						<h1>profile right</h1>
						<Paper
							elevation={4}
							variant='elevation'
							className={[
								classes.paperForm,
								{ width: '100%', height: '100%', border: '1px solid black' }
							]}
						>
							<Typography>Profile Name</Typography>
						</Paper>
					</div>
				</div>
			</Container>
		</Grow>
	);
};

export default Profile;
