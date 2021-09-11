import express from 'express';
import FundraisePosts from '../models/fundraise.model.js';
let fundraiseDataArray = {};

const router = express.Router();

// const fundraisePosts = [];
export const getFundraise = async (request, response) => {
	console.log('getFundraise Hit!');

	try {
		const allFundraisePosts = await FundraisePosts.find(); //fundraisePosts;
		// fundraiseDataArray = { ...allFundraisePosts };
		// console.log(fundraiseDataArray);
		response.status(200).send(allFundraisePosts);
	} catch (error) {
		console.log(error);
		response.status(500).send(error);
	}
};

export const createFundraise = async (request, response) => {
	console.log('createFundraise Hit!');

	const { title, description, amount, category, imageFile, user_id, user_name } = request.body;

	try {
		const createNewFundraisePost = await FundraisePosts.create({
			title: title,
			description: description,
			amount: amount,
			category: category,
			imageFile: imageFile,
			user_id: user_id,
			user_name: user_name
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

export const getFundraisePost = async (request, response) => {
	const { id } = request.params;
	console.log('getFundraisePost Hit!');
	console.log(id);

	try {
		const fundraisePost = await FundraisePosts.findById(id);

		response.status(200).send(fundraisePost);

		// const newFundraisePost = { title, description, amount, category, imageFile, user_id };
		// fundraisePosts.push(newFundraisePost);
		// response.status(201).json({ result: FundraisePosts });
	} catch (error) {
		console.log(error);
		response.status(404).send('Fundraise Post not Found!');
	}
};

export default router;
