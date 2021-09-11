import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, CardContent, CardActions, IconButton, Typography, Button } from '@material-ui/core';
import 'react-step-progress-bar/styles.css';
import { ProgressBar } from 'react-step-progress-bar';

import StripeCheckout from 'react-stripe-checkout';
import InputField from '../InputComponent/InputField';
import useStyles from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import { FaDonate } from 'react-icons/fa';
import Share from './Share';
import DonateAmount from './DonateAmount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../APIs';

const DonateItem = ({
	id,
	date,
	title,
	description,
	amount,
	category,
	imageFile,
	user,
	user_id,
	user_name,
	donatedAmount,
	setFundraiseData
}) => {
	const classes = useStyles();
	const history = useHistory();
	const [ isLiked, setIsLiked ] = useState(false);
	const [ donateClick, setDonateClick ] = useState(false);
	const [ payAmount, setPayAmount ] = useState(0);
	const [ readMore, setReadMore ] = useState(description.length > 300 ? true : false);

	let totalDonated = 0;
	let donationPercentage = 0;

	const totalDonations = () => {
		console.log(donatedAmount.length);
		for (let i = 0; i < donatedAmount.length; i++) {
			totalDonated += donatedAmount[i].amount;
		}
		console.log('total donated: ', totalDonated);
		donationPercentage = Math.floor(totalDonated / amount * 100);
		console.log('donationPercentage: ', donationPercentage);
	};

	const toggleReadMore = () => {
		setReadMore(!readMore);
	};

	const handleLikes = () => {
		user ? setIsLiked(!isLiked) : alert('Please Sign in to Favorite');
	};

	// const handleAmountChange = (e) => {
	// 	setPayAmount(e.target.value);
	// };

	const handleDonatePage = () => {
		history.push(`/donate/${id}`);
	};

	const makePayment = async (token) => {
		// setAnchorPay(null);
		await api
			.post('/payment/accept-payment', {
				token,
				amount: payAmount,
				post_id: id,
				user_id: user && user._id,
				user_name: user && `${user.firstname} ${user.lastname}`
			})
			.then((response) => {
				console.log(response.data);
				setFundraiseData(response.data);
				window.location.reload();
			})
			.catch((error) => console.log(error));
	};

	// const handlePaymentSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log('post amount', amount);
	// 	console.log('pay amount', payAmount);
	// };

	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ anchorPay, setAnchorPay ] = React.useState(null);

	const handleShare = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleDonate = (event) => {
		setAnchorPay(event.currentTarget);
		console.log('donate clicked!');
		user ? setDonateClick(!donateClick) : alert('Please Sign in to Donate');
	};

	const open = Boolean(anchorEl);
	const openDonate = Boolean(anchorPay);
	const share = open ? 'simple-popover' : undefined;
	const donate = openDonate ? 'simple-donate' : undefined;

	const notify = () => toast('Wow so easy !');
	return (
		<Card
			raised
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '0 1.5rem 0 1.5rem',
				marginBottom: '2rem',
				backgroundColor: 'rgba(150, 211, 149, 0.8)'
			}}
		>
			<div className={classes.donateCardContainer}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-start',
							justifyContent: 'center'
						}}
					>
						<div>
							<img className={classes.imageContainer} src={imageFile} alt={title} />
						</div>
						<div>
							<div className={classes.infoContainer}>
								<Typography
									style={{ textTransform: 'capitalize', cursor: 'pointer' }}
									variant='h4'
									onClick={handleDonatePage}
								>
									{title}
								</Typography>

								<Typography
									style={{ textDecoration: 'none' }}
									component={Link}
									to='/profile'
									variant='caption'
									color='primary'
								>
									{user_name} | {category} | {new Date(date).toDateString()}
								</Typography>
							</div>
							<div style={{ padding: '0 2rem', marginTop: '1rem' }}>
								{totalDonations()}
								<div
									style={{
										border: '3px solid #4faf4e',
										borderRadius: '1rem',
										paddingLeft: 1,
										paddingRight: 1,
										paddingBottom: 1,
										width: '100%'
									}}
								>
									<ProgressBar
										percent={donationPercentage}
										height={15}
										text={String(donationPercentage) + '%'}
										unfilledBackground='rgba(150, 211, 149, 0.5)'
										filledBackground='#4faf4e'
									/>
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
										paddingLeft: '0.5rem'
									}}
								>
									<Typography style={{ alignItems: 'flex-end' }} variant='subtitle2'>
										Fundraised: {totalDonated}
									</Typography>
									<Typography style={{ alignItems: 'flex-start' }} variant='subtitle2'>
										Amount: {amount}
									</Typography>
								</div>
							</div>
							<div className={classes.infoContainer}>
								{/* <Typography>{user_id}</Typography> */}
								<div style={{ marginTop: '1rem' }}>
									<Typography
										component='p'
										variant='body1'
										color='textSecondary'
										align='justify'
										paragraph
									>
										{readMore ? description.slice(0, 300) : description}
										{description.length > 300 ? (
											<span
												style={{ color: '#000' }}
												onClick={toggleReadMore}
												className='read-or-hide'
											>
												{readMore ? '    ...read more' : ' show less'}
											</span>
										) : null}
									</Typography>
								</div>
							</div>
						</div>
					</div>

					<div>
						<CardActions className={classes.buttonContainer} disableSpacing>
							<IconButton aria-label='more-options' onClick={notify}>
								<MoreVertIcon />
							</IconButton>
							<ToastContainer />
							<IconButton aria-describedby={share} aria-label='share' onClick={handleShare}>
								<ShareIcon />
							</IconButton>
							<div style={{ position: 'absolute' }}>
								<Share id={id} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
							</div>
							{donateClick && (
								<div style={{ position: 'relative' }}>
									<DonateAmount
										user={user}
										anchorPay={anchorPay}
										setAnchorPay={setAnchorPay}
										title={title}
										payAmount={payAmount}
										setPayAmount={setPayAmount}
										amount={amount}
										makePayment={makePayment}
										donateClick={donateClick}
										setDonateClick={setDonateClick}
									/>
								</div>
							)}
							<IconButton aria-label='like' onClick={handleLikes}>
								{isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
							</IconButton>

							<IconButton aria-describedby={donate} aria-label='donate' onClick={handleDonate}>
								<FaDonate />
							</IconButton>
						</CardActions>
					</div>
				</div>
				{/* {donateClick && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-end'
						}}
					>
						<form method='POST' onSubmit={handlePaymentSubmit}>
							<InputField
								name='amount'
								label='Fundraise Amount'
								type='number'
								value={payAmount}
								handleChange={handleAmountChange}
							/>
							<StripeCheckout
								stripeKey={stripeKey}
								token={makePayment}
								amount={payAmount * 100}
								name={title}
								description={`Donate ${payAmount}`}
							>
								<Button
									disabled={payAmount < 1 ? true : false}
									type='submit'
									fullWidth
									variant='contained'
									color='primary'
									size='large'
									startIcon={<PaymentRoundedIcon />}
									className={classes.button}
								>
									Pay Amount
								</Button>
							</StripeCheckout>
						</form>
					</div>
				)} */}
			</div>
		</Card>
	);
};

export default DonateItem;
