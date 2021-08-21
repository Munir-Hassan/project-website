import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	homeContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcomeMessage: {
		borderRadius: '1rem',
		margin: '1rem 0',
		padding: '2rem 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	welcomeImage: {
		display: 'inherit',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		borderRadius: '0.5rem',
		width: '100%',
		height: 'auto'
	},
	welcomeSloganMsg: {
		display: 'inherit',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: '2rem'
	},
	welcomeHeadline: {
		textAlign: 'center',
		fontSize: '2rem'
	},
	welcomeSubSlogan: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '1rem',
		fontSize: '1.5rem'
	},
	imgIcon: {
		padding: '1rem'
	},
	causeBtn: {
		fontSize: '2.2rem'
	},
	causeCategoryArea: {
		textAlign: 'center',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	categoryHeadline: {
		paddingBottom: '1rem'
	},
	cardSection: {
		display: 'inherit',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	callToAction: {
		textAlign: 'center',
		fontSize: '2.2rem'
	},
	btn: {
		padding: '0.2rem 0.5rem',
		margin: '0 0.5rem 0 0.5rem',
		// border: '2px solid #4faf4e',
		borderRadius: '1.2rem',
		color: '#4faf4e',
		'&:hover': {
			backgroundColor: '#4faf4e',
			color: 'white',
			transition: '0.3s'
		}
	},
	paraDonation: {
		margin: '0.5rem',
		fontSize: '5rem'
	},
	menuLinks: {
		textDecoration: 'none'
	}
}));
