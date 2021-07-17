import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardActions,
	IconButton,
	Typography,
	InputAdornment,
	OutlinedInput,
	FormControl,
	InputLabel
} from '@material-ui/core';
import useStyles from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FaDonate } from 'react-icons/fa';

const DonateItem = ({ date, title, description, amount, category, imageFile, user_id }) => {
	const classes = useStyles();
	const [ isLiked, setIsLiked ] = useState(false);
	const [ donateClick, setDonateClick ] = useState(false);
	const handleChange = () => {};
	const handleDonate = () => {
		setDonateClick(!donateClick);
	};
	const handleLikes = () => {
		setIsLiked(!isLiked);
	};
	return (
		<div>
			<Card raised className={classes.donateCardContainer}>
				<div>
					<img className={classes.imageContainer} src={imageFile} alt={title} />
				</div>
				<div>
					<CardContent className={classes.infoContainer} overflow='visible'>
						<Typography>{title}</Typography>

						<Typography>
							{category} | {date}
						</Typography>
						<Typography component='p' variant='body1' color='textSecondary' align='justify' paragraph>
							{description}
						</Typography>
					</CardContent>
				</div>

				<div>
					<CardActions className={classes.buttonContainer} disableSpacing>
						<IconButton aria-label='more-options'>
							<MoreVertIcon />
						</IconButton>
						<IconButton aria-label='share'>
							<ShareIcon />
						</IconButton>
						<IconButton aria-label='like' onClick={handleLikes}>
							{isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
						</IconButton>

						{!donateClick ? (
							<IconButton aria-label='donate'>
								<FaDonate onClick={handleDonate} />
							</IconButton>
						) : (
							<FormControl fullWidth className={classes.margin} variant='outlined'>
								<InputLabel htmlFor='outlined-adornment-amount'>Amount</InputLabel>
								<OutlinedInput
									id='outlined-adornment-amount'
									autoFocus
									type='number'
									value={55}
									onChange={handleChange('amount')}
									startAdornment={<InputAdornment position='start'>$</InputAdornment>}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton onClick={handleDonate} edge='end'>
												<FaDonate />
											</IconButton>
										</InputAdornment>
									}
									labelWidth={20}
								/>
							</FormControl>
						)}
					</CardActions>
				</div>
			</Card>
		</div>
	);
};

export default DonateItem;
