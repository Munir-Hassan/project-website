import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	// address: {
	// 	city: String,
	// 	country: String
	// },
	creaatedAt: {
		type: Date,
		default: new Date()
	},
	id: {
		type: String
	}
});

const Users = mongoose.model('Users', userSchema);

export default Users;
