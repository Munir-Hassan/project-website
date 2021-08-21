import React from 'react';
import { Grow, Container } from '@material-ui/core';
import FundraiseForm from './FundraiseForm';

const Fundraise = ({ user }) => {
	return (
		<Grow in>
			<Container maxWidth='xs'>
				<FundraiseForm user={user} />
			</Container>
		</Grow>
	);
};

export default Fundraise;
