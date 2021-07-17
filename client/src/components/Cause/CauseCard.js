import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Paper } from '@material-ui/core';
import useStyles from './styles';

const CauseCard = ({ name }) => {
	const classes = useStyles();
	const history = useHistory();
	const handleClick = () => {
		history.push('/donate');
	};
	return (
		<div>
			<Paper elevation={3} className={classes.paperCard}>
				<Typography variant='h4' align='center'>
					{name}
				</Typography>

				<Button variant='outlined' color='primary' onClick={handleClick}>
					View Donations
				</Button>
			</Paper>
		</div>
	);
};

export default CauseCard;
