import React from 'react';
import { Grid, Grow, Container } from '@material-ui/core';
import CauseCard from './CauseCard';
import useStyles from './styles';

const causeNames = [ 'Education', 'Health', 'Orphanage', 'Mosque', 'Poor & Needy', 'Food' ];
const Cause = () => {
	const classes = useStyles();
	return (
		<div>
			<Grow in>
				<Container maxWidth='lg'>
					<Grid container className={classes.causeContainer}>
						{causeNames.map((name, index) => (
							<Grid iten xs={12} sm={6} spacing={3}>
								<CauseCard key={index} name={name} />
							</Grid>
						))}
					</Grid>
				</Container>
			</Grow>
		</div>
	);
};

export default Cause;
