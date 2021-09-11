import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Grow, CardActions, IconButton, CircularProgress, Typography, Grid, Paper } from '@material-ui/core';

import api from '../../APIs';
import useStyles from './styles';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { FaDonate } from 'react-icons/fa';

import Share from './Share';
import DonateAmount from './DonateAmount';

const DonatePage = ({ user }) => {
	const { id } = useParams();
	const classes = useStyles();
	const location = useLocation();
	const [ fundraisePost, setFundraisePost ] = useState();
	const [ isLiked, setIsLiked ] = useState(false);
	const [ donateClick, setDonateClick ] = useState(false);

	useEffect(() => {
		const getFundraisePost = async () => {
			await api
				.get(`/fundraise/get-fundraise/${id}`)
				.then((response) => {
					console.log(response.data);
					setFundraisePost(response.data);
					// totalDonations();
				})
				.catch((error) => {
					console.log('FAILED');
					console.log(error);
				});
		};
		getFundraisePost();
		return () => {
			getFundraisePost();
		};
	}, []);

	const makePayment = async (token) => {
		// setAnchorPay(null);
		await api
			.post('/payment/accept-payment', {
				token,
				amount: payAmount,
				post_id: id,
				userId: user && user._id,
				user_name: user && `${user.firstname} ${user.lastname}`
			})
			.then((response) => {
				console.log(response.data);
				setFundraisePost(response.data);
				window.location.reload();
			})
			.catch((error) => console.log(error));
	};
	const [ payAmount, setPayAmount ] = useState(0);
	const [ anchorPay, setAnchorPay ] = React.useState(null);
	const openDonate = Boolean(anchorPay);
	const donate = openDonate ? 'simple-donate' : undefined;

	const handleDonate = (event) => {
		setAnchorPay(event.currentTarget);
		console.log('donate clicked!');
		user ? setDonateClick(!donateClick) : alert('Please Sign in to Donate');
	};

	const handleLikes = () => {
		user ? setIsLiked(!isLiked) : alert('Please Sign in to Favorite');
	};

	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleShare = (event) => {
		setAnchorEl(event.currentTarget);
		console.log(location.pathname);
	};

	const open = Boolean(anchorEl);
	const share = open ? 'simple-popover' : undefined;

	let totalDonated = 0;
	let donationPercentage = 0;
	let amountLeft = 0;
	let remainingpPercentage = 0;

	const totalDonations = () => {
		// console.log(typeof fundraisePost.donated.length);
		// const paid = fundraisePost.donated.length === undefined && 0;
		const arrayLen = Object.keys(fundraisePost.donated).length;
		console.log(arrayLen);
		for (let i = 0; i < arrayLen; i++) {
			totalDonated += fundraisePost.donated[i].amount;
		}
		console.log('total donated:', totalDonated);
		donationPercentage = Math.floor(totalDonated / fundraisePost.amount * 100);
		amountLeft = fundraisePost.amount - totalDonated;
		remainingpPercentage = Math.floor(amountLeft / fundraisePost.amount * 100);
		console.log('donate percentage: ', donationPercentage);
	};
	// totalDonations();
	return (
		<Grow in>
			<Container>
				{!fundraisePost ? (
					<CircularProgress />
				) : (
					<React.Fragment>
						<div style={{ flexGrow: 1, marginTop: '2rem' }}>
							<Grid container spacing={0}>
								<Grid
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										//justifyContent: 'center',
										// border: '1px solid black',
										// backgroundColor: '#4faf4e',
										// backgroundColor: 'rgba(150, 211, 149, 0.8)',
										borderTopLeftRadius: '1rem',
										borderBottomLeftRadius: '1rem'
										// padding: 10
									}}
									item
									xs={8}
								>
									<Paper
										elevation={3}
										style={{
											backgroundColor: 'rgba(150, 211, 149, 0.8)',
											borderRadius: '1rem',
											width: '90%',
											padding: '1rem',
											marginBottom: '2rem',
											marginTop: '2rem',
											justifyContent: 'center'
										}}
									>
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												alignItems: 'center'
												//width: '100%'
											}}
										>
											{/* <div>
										<img
											style={{
												width: '10rem',
												height: '10rem',
												objectFit: 'contain'
											}}
											src={fundraisePost.imageFile}
											alt={fundraisePost.title}
										/>
									</div> */}
											<div style={{ flex: 1 }}>
												<div style={{ flex: 1 }}>
													{totalDonations()}
													<div
														style={{
															border: '3px solid #4faf4e',
															borderRadius: '1rem',
															paddingLeft: 1,
															paddingRight: 1
															// paddingTop: 1
															//width: '100%'
														}}
													>
														<ProgressBar
															percent={donationPercentage}
															height={20}
															width={'100%'}
															text={String(donationPercentage) + '%'}
															unfilledBackground='rgba(150, 211, 149, 0.8)'
															filledBackground='#4faf4e'
														/>
													</div>
												</div>
												<div
													style={{
														display: 'flex',
														flexDirection: 'row',
														alignItems: 'center',
														justifyContent: 'space-between',
														padding: 10
													}}
												>
													<div>
														<Typography variant='h5'>$ {fundraisePost.amount}</Typography>
														<Typography variant='caption'>AMOUNT</Typography>
													</div>
													<div>
														<Typography variant='h5'>$ {amountLeft} to go</Typography>
														<Typography variant='caption'>
															{remainingpPercentage}% REMAINING
														</Typography>
													</div>
												</div>
											</div>
										</div>
										<div>
											<CardActions
												style={{
													display: 'flex',
													flexDirection: 'row',
													alignItems: 'center',
													justifyContent: 'space-evenly'
												}}
												disableSpacing
											>
												<IconButton aria-label='more-options'>
													<MoreVertIcon />
												</IconButton>
												<IconButton
													aria-describedby={share}
													aria-label='share'
													onClick={handleShare}
												>
													<ShareIcon />
												</IconButton>
												<div style={{ position: 'absolute' }}>
													<Share anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
												</div>
												<IconButton aria-label='like' onClick={handleLikes}>
													{isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
												</IconButton>
												<div
													style={{
														display: 'flex',
														alignItems: 'center',
														color: '#707070',
														fontSize: '1.3rem'
													}}
												>
													<IconButton
														aria-describedby={donate}
														aria-label='donate'
														onClick={handleDonate}
													>
														<FaDonate />
													</IconButton>
													{`(${Object.keys(fundraisePost.donated).length})`}
												</div>
												{donateClick && (
													<DonateAmount
														user={user}
														anchorPay={anchorPay}
														setAnchorPay={setAnchorPay}
														title={fundraisePost.title}
														payAmount={payAmount}
														setPayAmount={setPayAmount}
														amount={fundraisePost.amount}
														makePayment={makePayment}
														donateClick={donateClick}
														setDonateClick={setDonateClick}
													/>
												)}
											</CardActions>
										</div>
									</Paper>

									<Paper
										style={{
											backgroundColor: 'rgba(150, 211, 149, 0.8)',
											borderRadius: '1rem',
											width: '90%',
											padding: '1rem',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<div style={{ padding: '2rem 0' }}>
											<img
												style={{
													width: '100%',
													height: '20rem',
													objectFit: 'contain'
												}}
												src={fundraisePost.imageFile}
												alt={fundraisePost.title}
											/>
										</div>
										<div style={{ padding: '0 3rem' }}>
											<div>
												<Typography
													style={{
														textTransform: 'capitalize',
														fontWeight: 'bold',
														textAlign: 'center'
													}}
													variant='h4'
												>
													{fundraisePost.title}
												</Typography>
											</div>
											<div style={{ paddingBottom: '1rem' }}>
												<Typography
													style={{
														textTransform: 'capitalize',
														fontSize: '1.25rem',
														textAlign: 'justify'
													}}
													variant='caption'
												>
													{fundraisePost.description}
												</Typography>
											</div>
										</div>
									</Paper>
								</Grid>
								<Grid
									style={{
										display: 'flex',
										flexDirection: 'coloumn',
										alignItems: 'center',
										justifyContent: 'center'
										// border: '1px solid black'
									}}
									item
									xs={4}
								>
									{/* <Typography>Right</Typography> */}
								</Grid>
							</Grid>
						</div>
					</React.Fragment>
				)}
			</Container>
		</Grow>
	);
};
export default DonatePage;
