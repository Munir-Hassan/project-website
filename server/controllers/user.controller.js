import express from 'express';
import Users from '../models/user.model.js';
import Admin from '../models/admin.model.js';

const router = express.Router();

export const signUp = async (request, response) => {
	const { firstname, lastname, email, password } = request.body;

	console.log('signUp Hit!');
	try {
		const userExists = await Users.findOne({ email });
		if (userExists) {
			console.log('User Already Exists');
			response.status(400).json({ success: false, error: 'User already exists' });
		} else {
			const newUser = await Users.create({
				email: email,
				password: password,
				firstname: firstname,
				lastname: lastname
			});

			console.log(newUser);
			response.status(201).json({ result: newUser });
		}
	} catch (error) {
		console.log(error);
		response.status(500).json({ message: 'signUp: Something Went Wrong!' });
	}
};

export const signIn = async (request, response) => {
	const { email, password } = request.body;
	console.log('signIn Hit!');

	try {
		const userExits = await Users.findOne({ email });

		if (!userExits) {
			response.status(404).send({ message: "User Doesn't Exit" });
		} else if (userExits.password !== password) {
			response.status(404).send({ message: 'Incorrect Password!' });
		} else {
			console.log(userExits);
			response.status(201).json({ result: userExits });
		}
	} catch (error) {
		console.log(error);
		response.status(500).json({ message: 'signIn: Something Went Wrong!' });
	}
};

export const adminLogin = async (request, response) => {
	const { username, password } = request.body;
	console.log('adminLogin Hit!');

	try {
		const adminExists = await Admin.findOne({ username });

		if (!adminExists) {
			response.status(404).send({ message: 'Incorrect Username' });
		} else if (adminExists.password !== password) {
			response.status(404).send({ message: 'Incorrect Password!' });
		} else {
			console.log(adminExists);
			response.status(201).json({ result: adminExists });
		}
	} catch (error) {
		console.log(error);
		response.status(500).json({ message: 'adminLogin: Something Went Wrong!' });
	}
};

export const createAdmin = async (request, response) => {
	const { username, password, role } = request.body;

	console.log('createAdmin Hit!');
	try {
		const adminExists = await Admin.findOne({ username });
		if (adminExists) {
			console.log('Admin Already Exists');
			response.statusMessage = 'testing response message';
			response.status(400).send('Admin Already Exits');
		} else {
			const newAdmin = await Admin.create({
				username,
				password,
				role
			});

			console.log(newUser);
			response.status(201).json({ result: newAdmin });
		}
	} catch (error) {
		console.log(error);
		response.statusMessage = 'testing response message';
		response.status(500).json({ message: 'signUp: Something Went Wrong!' });
	}
};

export default router;
