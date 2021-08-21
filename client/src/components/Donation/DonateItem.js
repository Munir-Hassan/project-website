import React, { useState } from 'react';
import { Card, CardContent, CardActions, IconButton, Typography, Button } from '@material-ui/core';

import StripeCheckout from 'react-stripe-checkout';
import InputField from '../InputComponent/InputField';
import useStyles from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import { FaDonate } from 'react-icons/fa';

const DonateItem = ({ date, title, description, amount, category, imageFile, user_id, user }) => {
	const classes = useStyles();
	const [ isLiked, setIsLiked ] = useState(false);
	const [ donateClick, setDonateClick ] = useState(false);
	const [ payAmount, setPayAmount ] = useState(0);
	const [ readMore, setReadMore ] = useState(true);

	const toggleReadMore = () => {
		setReadMore(!readMore);
	};

	const handleDonate = () => {
		console.log('donate clicked!');
		user ? setDonateClick(!donateClick) : alert('Please Sign in to Donate');
	};
	const handleLikes = () => {
		user ? setIsLiked(!isLiked) : alert('Please Sign in to Favorite');
	};

	const handleAmountChange = (e) => {
		setPayAmount(e.target.value);
	};

	const handlePaymentSubmit = (event) => {
		event.preventDefault();
		console.log('post amount', amount);
		console.log('pay amount', payAmount);
	};
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
				backgroundColor: '#96d395'
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
							<CardContent className={classes.infoContainer} overflow='visible'>
								<Typography style={{ textTransform: 'capitalize' }} variant='h4'>
									{title}
								</Typography>

								<Typography>
									{category} | {date}
								</Typography>
								<Typography>Amount: {amount} Fundraised: 20</Typography>
								<div className='progress'>
									<div className='bar' />
								</div>
								<Typography>{user_id}</Typography>
								<div style={{ marginTop: '1rem' }}>
									<Typography
										component='p'
										variant='body1'
										color='textSecondary'
										align='justify'
										paragraph
									>
										{readMore ? description.slice(0, 300) : description}
										<span
											style={{ color: '#000' }}
											onClick={toggleReadMore}
											className='read-or-hide'
										>
											{readMore ? '...read more' : ' show less'}
										</span>
									</Typography>
								</div>
							</CardContent>
						</div>
					</div>

					<div>
						<CardActions className={classes.buttonContainer} disableSpacing>
							<IconButton aria-label='more-options'>
								<MoreVertIcon />
							</IconButton>
							<IconButton aria-label='share'>
								<ShareIcon />
							</IconButton>
							<IconButton aria-label='like' onClick={handleLikes}>
								{isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
							</IconButton>

							<IconButton aria-label='donate'>
								<FaDonate onClick={handleDonate} />
							</IconButton>

							{/* {!donateClick ? (
							<IconButton aria-label='donate'>
								<FaDonate onClick={handleDonate} />
							</IconButton>
						) : (
							<FormControl fullWidth className={classes.inputAmount} variant='outlined'>
								<InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
								<OutlinedInput
									id='outlined-adornment-amount'
									autoFocus
									type='number'
									onChange={handleChange('amount')}
									startAdornment={<InputAdornment position='start'>$</InputAdornment>}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton onClick={handleDonate} edge='end'>
												<FaDonate />
											</IconButton>
										</InputAdornment>
									}
									labelWidth={0}
								/>
							</FormControl>
						)} */}
						</CardActions>
					</div>
				</div>
				{donateClick && (
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
								amount={amount * 100}
								name={title}
								description={`Donate ${amount}`}
								email='your@email.com'
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
				)}
			</div>
		</Card>
	);
};

export default DonateItem;
