import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Grow, Button, IconButton, CircularProgress, Typography, Grid, Paper } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import InputField from '../InputComponent/InputField';
import StripeCheckout from 'react-stripe-checkout';

const DonateAmount = ({
	user,
	anchorPay,
	setAnchorPay,
	payAmount,
	setPayAmount,
	amount,
	makePayment,
	title,
	donateClick,
	setDonateClick
}) => {
	// const baseURL = 'http://localhost:3000';
	// const location = useLocation();
	// const shareURL = baseURL + location.pathname;

	const stripeKey =
		'pk_test_51JUB7gG4mYEivN6GqGDd9DdWuY910jsI1r35Piua6HcRNBqz4xfl5xWg0iXiG2Q18FxaltoeaJQ1VBOKCdoXOXES00QR7G8BSH';

	const handleClosePopOver = () => {
		setAnchorPay(null);
		setPayAmount(0);
		setDonateClick(!donateClick);
		// setCopySuccess(false);
	};
	const openDonate = Boolean(anchorPay);
	const donate = openDonate ? 'simple-donate' : undefined;

	const handleAmountChange = (e) => {
		setPayAmount(e.target.value);
	};
	const handlePaymentSubmit = (event) => {
		event.preventDefault();
		console.log('post amount', amount);
		console.log('pay amount', payAmount);
	};

	return (
		<div style={{ display: donateClick ? 'block' : 'none' }}>
			<Popover
				id={donate}
				open={openDonate}
				anchorPay={anchorPay}
				onClose={handleClosePopOver}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
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
						email={user.email}
						description={`Donate ${payAmount}`}
					>
						<Button
							onClick={handleClosePopOver}
							disabled={payAmount < 1 ? true : false}
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							size='large'
							startIcon={<PaymentRoundedIcon />}
							// className={classes.button}
						>
							Pay Amount
						</Button>
					</StripeCheckout>
				</form>
			</Popover>
		</div>
	);
};

export default DonateAmount;
