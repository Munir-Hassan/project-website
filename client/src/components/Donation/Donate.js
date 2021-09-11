import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grow, CircularProgress } from '@material-ui/core';
import DonateItem from './DonateItem';
import api from '../../APIs';
const Donate = ({ user, fundraiseData, setFundraiseData }) => {
	const location = useLocation();

	useEffect(() => {
		const getAllFundraiseData = async () => {
			await api
				.get('/fundraise/get-fundraise')
				.then((response) => {
					console.log(response.data);
					setFundraiseData([ ...response.data ]);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		if (fundraiseData.length == 0) {
			getAllFundraiseData();
		}
	}, []);

	return (
		<Grow in>
			<Container maxWidth='md'>
				{!fundraiseData.length ? (
					<CircularProgress />
				) : (
					fundraiseData
						.slice(0)
						.reverse()
						.filter((status) => status.status === 'pending')
						.map((fundraise, index) => (
							<DonateItem
								key={index}
								id={fundraise._id}
								date={fundraise.createdAt}
								title={fundraise.title}
								description={fundraise.description}
								category={fundraise.category}
								amount={fundraise.amount}
								imageFile={fundraise.imageFile}
								status={fundraise.status}
								donatedAmount={fundraise.donated}
								user={user}
								user_id={fundraise.user_id}
								user_name={fundraise.user_name}
								setFundraiseData={setFundraiseData}
							/>
						))
				)}
			</Container>
		</Grow>
	);
};

export default Donate;
