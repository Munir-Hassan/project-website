import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	paperForm: {
		margin: '30px 0',
		padding: '10px'
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center'
	},
	formControl: {
		marginBottom: '10px'
	},
	imageUpload: {
		display: 'none'
	},

	imageUploadButton: {
		margin: theme.spacing(1)
	},
	fundraiseButtons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	}
}));
