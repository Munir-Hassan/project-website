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
		padding: '10px 20px',
		backgroundColor: '#4faf4e',
		borderRadius: 5
		// boxShadow: '0 0px 8px 3px rgba(0, 0, 0, 0.2)'
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
		flex: '0.2'
	},
	brandName: {
		fontSize: '1.8rem',
		textDecoration: 'none',
		color: '#fff'
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
		position: 'relative',
		fontSize: '1.3rem',
		margin: '0 0.8rem 0 0.8rem',
		textDecoration: 'none',
		color: '#fff',
		'&:hover': {
			textDecoration: 'underline'
			// backgroundColor: '#555',
			// border: '1px solid white'
			// transition: 'all 0.5s ease-in-out'
		}
	},
	profileContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		flex: '0.2'
		// border: '1px solid black'
	}
}));
