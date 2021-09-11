import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	donateCardContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '1.5rem',
		width: '100%',
		borderRadius: 10
		// backgroundColor: '#addeac'
		// border: '1px solid black'
	},
	imageContainer: {
		height: '15rem',
		width: '15rem',
		objectFit: 'container',
		'&:hover': {
			objectFit: 'cover'
			// transition: '0.s'
		}
		// border: '1px solid black'
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingLeft: '2rem',
		paddingRight: '2rem'
		// overflowY: 'auto'
		// minWidth: '80%',
		// maxWidth: '80%',
		// border: '1px solid black'
	},
	buttonContainer: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		// flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderLeft: '2px solid #808080'
		// border: '1px solid black'
	},
	inputAmount: {
		// position: 'absolute',
		// bottom: '50px',
		// zIndex: '100'
	}
	// progress: {
	// 	width: 'inherit',
	// 	backgroundColor: '#efefef',
	// 	margin: '0.5rem',
	// 	borderRadius: '0.5rem'
	// },
	// bar: {
	// 	width: '20%',
	// 	height: '0.6rem',
	// 	backgroundColor: '#4faf4e',
	// 	borderRadius: 'inherit'
	// }
}));
