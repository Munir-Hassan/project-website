import express from 'express';
import FundraisePosts from '../models/fundraise.model.js';

const router = express.Router();

// const fundraisePosts = [];
export const getFundraise = async (request, response) => {
	console.log('getFundraise Hit!');

	try {
		const allFundraisePosts = await FundraisePosts.find(); //fundraisePosts;
		response.status(200).send(allFundraisePosts);
	} catch (error) {
		console.log(error);
		response.status(500).send(error);
	}
};

export const createFundraise = async (request, response) => {
	console.log('createFundraise Hit!');

	const { title, description, amount, category, imageFile, user_id } = request.body;

	try {
		const createNewFundraisePost = await FundraisePosts.create({
			title: title,
			description: description,
			amount: amount,
			category: category,
			imageFile: imageFile,
			user_id: user_id
		});
		console.log(createNewFundraisePost);
		response.status(201).json({ result: createNewFundraisePost });

		// const newFundraisePost = { title, description, amount, category, imageFile, user_id };
		// fundraisePosts.push(newFundraisePost);
		// response.status(201).json({ result: FundraisePosts });
	} catch (error) {
		console.log(error);
		response.status(404).send('Fundraise Post not created!');
	}
};

export default router;
