import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	donateCardContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '1.5rem',
		marginBottom: '3rem',
		height: '25rem',
		width: '100%',
		border: '1px solid black'
	},
	imageContainer: {
		height: '15rem',
		width: '15rem',
		objectFit: 'cover',
		flex: '0.4',
		border: '1px solid black'
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '0.5',
		alignItems: 'start',
		justifyContent: 'center',
		overflow: 'auto',
		border: '1px solid black'
	},
	buttonContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: '0.1',
		alignItems: 'center',
		justifyContent: 'space-between',
		border: '1px solid black'
	}
}));
