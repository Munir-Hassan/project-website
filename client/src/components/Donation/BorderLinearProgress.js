import React from 'react';
import useStyles from './styles';

const BorderLinearProgress = () => {
	const classes = useStyles();
	return (
		<div className={classes.meter}>
			<span style='width: 25%' />
		</div>
	);
};

export default BorderLinearProgress;
