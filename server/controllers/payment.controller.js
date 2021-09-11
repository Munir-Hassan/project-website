import express from 'express';
import Stripe from 'stripe';
const stripe = new Stripe(
	'sk_test_51JUB7gG4mYEivN6GniSdw3cmoTbtqj85lMpO3X3bmOPzqkxQluSIQPfEQwxt1p28mNDd0l0pVvmaiItDwH5ezZDi00A7oZNnd9'
);
import { v4 as uuidv4 } from 'uuid';
import FundraisePosts from '../models/fundraise.model.js';

const router = express.Router();

export const acceptPayment = async (request, response) => {
	console.log('acceptPayment Hit!');
	const { token, amount, post_id, user_id, user_name } = request.body;
	// console.log(token);
	console.log(token.id);
	console.log(amount);
	console.log(post_id);
	const idempotencyKey = uuidv4();

	try {
		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id
		});

		const charges = await stripe.charges.create(
			{
				amount: amount * 100,
				currency: 'usd',
				customer: customer.id,
				receipt_email: token.email,
				description: 'some description'
			},
			{ idempotencyKey }
		);
		// console.log(charges);
		const fundraisePost = await FundraisePosts.findById(post_id);
		console.log('fundraise payment: ');
		// console.log(fundraisePost);
		// console.log(typeof fundraisePost.donated);

		if (charges.status === 'succeeded') {
			const donated = {
				amount: charges.amount / 100,
				user: {
					userId: user_id,
					name: user_name,
					email: charges.receipt_email
				},
				transaction_id: charges.balance_transaction,
				receipt_url: charges.receipt_url
			};
			try {
				fundraisePost.donated.push(donated);
				// console.log(fundraisePost.donated);
				// const updateDonated = await FundraisePosts.findOneAndUpdate(post_id, fundraisePost);
				// const updateDonated = fundraisePost.updateOne({ id: post_id }, { $set: { donated } });
				// console.log(fundraisePost.donated);
				const updateDonated = await FundraisePosts.findByIdAndUpdate(post_id, fundraisePost, { new: true });
				response.status(200).send(updateDonated);
			} catch (error) {
				console.log(error);
			}
		}
	} catch (error) {
		console.log(error);
		response.status(500).send(error);
	}
};

export default router;
