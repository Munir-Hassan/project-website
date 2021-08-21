import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	profileContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		border: '1px solid black'
	},
	profileLeft: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '30%'
		// border: '1px solid black'
	},
	paperForm: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2rem 0 2rem 0',
		margin: 10
		// width: '30%',
		// border: '1px solid black'
	},
	profileRight: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '70%',
		border: '1px solid black'
	}
}));
