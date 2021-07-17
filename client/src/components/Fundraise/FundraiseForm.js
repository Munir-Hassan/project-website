import React, { useState } from 'react';
import { Paper, Button, Typography, Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyles from './styles';
import InputField from '../InputComponent/InputField';
import api from '../../APIs';

const initialFundraiseForm = {
	title: '',
	description: '',
	amount: '',
	category: '',
	imageFile: '',
	user_id: ''
};
const categoryList = [ 'Education', 'Health', 'Orphanage', 'Mosque', 'Poor & Needy', 'Food' ];
let imageBase64 = '';
const FundraiseForm = () => {
	const classes = useStyles();
	const [ fundraiseForm, setFundraiseForm ] = useState(initialFundraiseForm);
	const [ causeName, setCauseName ] = useState('');
	const [ didUpload, setDidUpload ] = useState(false);

	const handleInputChange = (e) => {
		if (e.target.name === 'category') {
			setCauseName(e.target.value);
		}

		setFundraiseForm({ ...fundraiseForm, [e.target.name]: e.target.value });
	};

	const uploadImageFile = (e) => {
		//cancelling upload the second time before sumbmit gives an error.
		//Please fix later.
		const image = e.target.files[0];
		const reader = new FileReader();
		console.log('uploadImageFile');

		reader.onloadend = () => {
			console.log(image);
			imageBase64 = reader.result;
			console.log(imageBase64);
			setFundraiseForm({ ...fundraiseForm, [e.target.name]: imageBase64 });
			setDidUpload(true);
		};

		reader.readAsDataURL(image);
	};

	const handleFundraiseFormSubmit = async (event) => {
		event.preventDefault();
		console.log(fundraiseForm);

		try {
			await api
				.post('/fundraise/create-fundraise', fundraiseForm)
				.then((response) => {
					console.log('fundraise post!');
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (error) {
			console.log('inside fundraiseForm');
			console.log(error);
		}
	};

	return (
		<Paper elevation={4} variant='elevation' className={classes.paperForm}>
			<Typography align='center' gutterBottom variant='h4'>
				Post a Fundraise
			</Typography>
			<form method='POST' className={classes.form} onSubmit={handleFundraiseFormSubmit}>
				<InputField name='title' label='Title' type='text' autoFocus handleChange={handleInputChange} />
				<InputField
					name='description'
					label='Fundraise Description'
					type='text'
					multiline={true}
					row={5}
					handleChange={handleInputChange}
				/>
				<InputField name='amount' label='Fundraise Amount' type='number' handleChange={handleInputChange} />
				<input
					id='image-upload'
					type='file'
					name='imageFile'
					label='Select an Image'
					multiple={false}
					accept='image/png, image/jpeg'
					className={classes.imageUpload}
					onChange={uploadImageFile}
				/>
				<FormControl variant='outlined' fullWidth required size='small' className={classes.formControl}>
					<InputLabel id='category-list'>Select A Cause</InputLabel>
					<Select labelId='category-list' name='category' value={causeName} onChange={handleInputChange}>
						{categoryList.map((type, index) => {
							return (
								<MenuItem key={index} value={type}>
									{type}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<div className={classes.fundraiseButtons}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<label htmlFor='image-upload'>
								<Button
									fullWidth
									variant='outlined'
									color='primary'
									component='span'
									startIcon={<CloudUploadIcon />}
								>
									Upload Image
								</Button>
							</label>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Button
								disabled={didUpload ? false : true}
								type='submit'
								color='primary'
								variant='contained'
								fullWidth
							>
								Create Fundraise
							</Button>
						</Grid>
					</Grid>
				</div>
			</form>
		</Paper>
	);
};

export default FundraiseForm;
