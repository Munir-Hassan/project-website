import React from 'react';
import { Grow, Container } from '@material-ui/core';
import FundraiseForm from './FundraiseForm';

const Fundraise = () => {
	return (
		<Grow in>
			<Container maxWidth='xs'>
				<FundraiseForm />
			</Container>
		</Grow>
	);
};

export default Fundraise;
