import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './styles';

const NavBar = ({ user, setUser }) => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const handleLogOut = () => {
		localStorage.clear();
		setUser(null);
		history.push('/');
	};

	const handleLogIn = () => {
		history.push('/auth');
	};

	const handleUser = () => {
		history.push('/profile');
	};

	useEffect(
		() => {
			setUser(JSON.parse(localStorage.getItem('userProfile')));
		},
		[ location ]
	);

	return (
		<nav>
			<AppBar className={classes.appBar} position='sticky' color='secondary'>
				<div className={classes.brandContainer}>
					<Typography className={classes.brandName} component={Link} to='/' variant='h2' align='center'>
						Imam Foundation
					</Typography>
				</div>
				<div className={classes.menuContainer}>
					<Typography className={classes.menuItem} component={Link} to='/cause' align='center'>
						Our Causes
					</Typography>
					<Typography className={classes.menuItem} component={Link} to='/donate' align='center'>
						Donation
					</Typography>
					<Typography className={classes.menuItem} component={Link} to='/fundraise' align='center'>
						Fundraise
					</Typography>
					<Typography className={classes.menuItem} component={Link} to='/about' align='center'>
						About Us
					</Typography>
					<Typography className={classes.menuItem} component={Link} to='/contact' align='center'>
						Contact Us
					</Typography>
				</div>
				<div className={classes.profileContainer}>
					{user ? (
						<React.Fragment>
							<Button
								onClick={handleUser}
								variant='outlined'
							>{`${user.firstname} ${user.lastname}`}</Button>
							<Button variant='outlined' color='secondary' onClick={handleLogOut}>
								Sign Out
							</Button>
						</React.Fragment>
					) : (
						<Button
							style={{ color: '#fff' }}
							startIcon={<AccountCircleIcon />}
							variant='text'
							onClick={handleLogIn}
						>
							Sign In
						</Button>
					)}
				</div>
			</AppBar>
		</nav>
	);
};

export default NavBar;
