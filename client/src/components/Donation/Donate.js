import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grow, CircularProgress } from '@material-ui/core';
import DonateItem from './DonateItem';
import api from '../../APIs';
const Donate = () => {
	const location = useLocation();
	const [ fundraiseData, setFundraiseData ] = useState([]);
	useEffect(
		() => {
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
			getAllFundraiseData();
			return () => {
				getAllFundraiseData();
			};
		},
		[ location ]
	);
	return (
		<Grow in>
			<Container maxWidth='md'>
				{!fundraiseData.length ? (
					<CircularProgress />
				) : (
					fundraiseData
						.slice(0)
						.reverse()
						.map((fundraise, index) => (
							<DonateItem
								key={index}
								date={fundraise.createdAt}
								title={fundraise.title}
								description={fundraise.description}
								category={fundraise.category}
								amount={fundraise.amount}
								imageFile={fundraise.imageFile}
								user_id={fundraise.user_id}
							/>
						))
				)}
			</Container>
		</Grow>
	);
};

export default Donate;
