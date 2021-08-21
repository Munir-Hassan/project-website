import React from 'react';
import { Link } from 'react-router-dom';
import { Grow, Typography } from '@material-ui/core';
import useStyles from './styles';
import img from '../../images/img_avatar.png';

const HomePage = () => {
	const classes = useStyles();
	return (
		// <div>
		// 	<h1>this is homepage</h1>
		// </div>
		<Grow in>
			<div className={classes.homeContainer}>
				<section className={classes.welcomeMessage}>
					<div className={classes.welcomeImage}>
						<img className={classes.image} src={img} alt='welcome-img' />
					</div>

					<div className={classes.welcomeSloganMsg}>
						<div className={classes.welcomeHeadline}>
							<h1>Make Donations,</h1> <br /> <h1>Change Lives Everywhere.</h1>
						</div>

						<div className={classes.welcomeSubSlogan}>
							<div className={classes.imgIcon}>
								{/* <img src='#' alt='icon' /> */}
								<p>Support the cause that matters to you.</p>
							</div>

							<div className={classes.imgIcon}>
								{/* <img src='#' alt='icon' /> */}
								<p>Hear stories about the people you have helped.</p>
							</div>
						</div>

						{/* <Link to='/cause' className={classes.causeBtn}>
							<span className='btn'>Our Causes</span>
						</Link> */}
					</div>
				</section>
				{/* <div className={classes.causeCategoryArea}>
					<h1 className={classes.categoryHeadline}>Supprt the causes you care about</h1>
					<div className={classes.cardSection}>
						<h1>card section</h1>
						<CardComponent />
					<CardComponent />
					<CardComponent />
					</div>
				</div> */}
				<section className={classes.callToAction}>
					<Typography className={classes.paraDonation}>
						Make a
						<Link to='/donate' className={classes.menuLinks}>
							<span className={classes.btn}>Donation</span>
						</Link>
					</Typography>
					<hr />
					<Typography className={classes.paraDonation}>
						<Link to='/fundraise' className={classes.menuLinks}>
							<span className={classes.btn}>Fundraise</span>
						</Link>
						Your Need
					</Typography>
				</section>
			</div>
		</Grow>
	);
};

export default HomePage;
