import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const NavBar = ({ user, setUser }) => {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const handleLogOut = () => {
		localStorage.clear();
		setUser(null);
	};

	const handleLogIn = () => {
		history.push('/auth');
	};

	useEffect(
		() => {
			setUser(JSON.parse(localStorage.getItem('userProfile')));
		},
		[ location ]
	);

	return (
		<nav>
			<AppBar className={classes.appBar} position='static' color='transparent'>
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
							<p>{user.firstname}</p>
							<Button onClick={handleLogOut}>Sign Out</Button>
						</React.Fragment>
					) : (
						<Button onClick={handleLogIn}>Sign In</Button>
					)}
				</div>
			</AppBar>
		</nav>
	);
};

export default NavBar;
