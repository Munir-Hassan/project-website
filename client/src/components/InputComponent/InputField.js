import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import useStyles from './styles';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const InputField = ({ name, handleChange, label, half, autoFocus, type, multiline, row, handleShowPassword }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				className={classes.inputField}
				name={name}
				onChange={handleChange}
				variant='outlined'
				required
				fullWidth
				multiline={multiline}
				rowmax={row}
				label={label}
				autoFocus={autoFocus}
				type={type}
				size='small'
				InputProps={
					name === 'password' ? (
						{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton onClick={handleShowPassword}>
										{type === 'password' ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							)
						}
					) : null
				}
			/>
		</Grid>
	);
};

export default InputField;