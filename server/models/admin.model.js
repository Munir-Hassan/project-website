import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	creaatedAt: {
		type: Date,
		default: new Date()
	},
	id: {
		type: String
	}
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
