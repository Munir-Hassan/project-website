import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	causeContainer: {
		direction: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	paperCard: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '30px 0',
		padding: '10px',
		height: '10rem'
	}
}));
