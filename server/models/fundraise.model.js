import mongoose from 'mongoose';

const fundraisePosts = mongoose.Schema({
	id: {
		type: String
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	imageFile: {
		type: String,
		required: true
	},
	user_id: {
		type: String,
		required: true
	},
	user_name: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: 'pending'
	},
	donated: [
		{
			amount: {
				type: Number,
				require: true,
				default: 0
			},
			user: {
				userId: {
					type: String
				},
				name: {
					type: String
				},
				email: {
					type: String
				}
			},
			transaction_id: {
				type: String
			},
			receipt_url: {
				type: String
			}
		}
	],
	createdAt: {
		type: Date,
		default: new Date()
	}
});

const FundraisePosts = mongoose.model('FundraisePosts', fundraisePosts);

export default FundraisePosts;
