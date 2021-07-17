import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	appBar: {
		// borderRadius: 10,
		marginTop: '15px',
		marginBottom: '30px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		padding: '10px 20px'
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
		flex: '0.2'
	},
	brandName: {
		fontSize: '1.8rem',
		textDecoration: 'none'
	},
	menuContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: '0.6',
		flexWrap: 'wrap'
		// border: '1px solid black'
	},
	menuItem: {
		margin: '0 0.3rem 0 0.3rem',
		textDecoration: 'none'
	},
	profileContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex: '0.2'
		// border: '1px solid black'
	}
}));
