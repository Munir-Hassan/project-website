import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Grow, CardActions, IconButton, CircularProgress, Typography, Grid, Paper } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import {
	FacebookShareButton,
	LinkedinShareButton,
	RedditShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookIcon,
	LinkedinIcon,
	RedditIcon,
	TwitterIcon,
	WhatsappIcon,
	TelegramIcon
} from 'react-share';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const Share = ({ anchorEl, setAnchorEl, id }) => {
	const baseURL = 'http://localhost:3000';
	const location = useLocation();
	const shareURL = baseURL + location.pathname + (id === undefined ? '' : `/${id}`);

	const copyLink = React.useRef(null);

	const handleClosePopOver = () => {
		setAnchorEl(null);
		setCopySuccess(false);
	};
	const open = Boolean(anchorEl);
	const share = open ? 'simple-popover' : undefined;

	const [ copySuccess, setCopySuccess ] = useState(false);
	return (
		<div>
			<Popover
				id={share}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClosePopOver}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center'
						}}
					>
						<div style={{ margin: 10 }}>
							<TwitterShareButton
								url='http://localhost:3000/donate/60dae7c30709d35970acb6c9'
								title='Imam Foundations'
								className='Demo__some-network__share-button'
							>
								<TwitterIcon size={35} round />
							</TwitterShareButton>
						</div>
						<div style={{ marginRight: 10 }}>
							<FacebookShareButton
								url='http://localhost:3000/donate/60dae7c30709d35970acb6c9'
								title='Imam Foundations'
								className='Demo__some-network__share-button'
							>
								<FacebookIcon size={35} round />
							</FacebookShareButton>
						</div>
						<div style={{ marginRight: 10 }}>
							<LinkedinShareButton
								url='http://localhost:3000/donate/60dae7c30709d35970acb6c9'
								title='Imam Foundations'
								className='Demo__some-network__share-button'
							>
								<LinkedinIcon size={35} round />
							</LinkedinShareButton>
						</div>
						<div style={{ marginRight: 10 }}>
							<WhatsappShareButton
								url='http://localhost:3000/donate/60dae7c30709d35970acb6c9'
								title='Imam Foundations'
								className='Demo__some-network__share-button'
							>
								<WhatsappIcon size={35} round />
							</WhatsappShareButton>
						</div>
						<div style={{ marginRight: 10 }}>
							<RedditShareButton
								url='http://localhost:3000/donate/60dae7c30709d35970acb6c9'
								title='Imam Foundations'
								className='Demo__some-network__share-button'
							>
								<RedditIcon size={35} round />
							</RedditShareButton>
						</div>
						<div style={{ marginRight: 10 }}>
							<TelegramShareButton
								url='http://localhost:3000/donate/60dae7c30709d35970acb6c9'
								title='Imam Foundations'
								className='Demo__some-network__share-button'
							>
								<TelegramIcon size={35} round />
							</TelegramShareButton>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: '0 0.5rem'
						}}
					>
						<textarea
							style={{ resize: 'none' }}
							ref={copyLink}
							name='shareLink'
							id='share-link'
							cols='30'
							rows='2'
							value={shareURL}
							onClick={(e) => {
								e.target.select();
								document.execCommand('copy');
								setCopySuccess(true);
							}}
						/>

						<div>
							<IconButton
								style={{ display: 'flex' }}
								onClick={() => {
									copyLink.current.select();
									document.execCommand('copy');
									setCopySuccess(true);
								}}
							>
								<FileCopyOutlinedIcon />
								<Typography>{copySuccess ? 'Copied!' : 'Copy'}</Typography>
							</IconButton>
						</div>
					</div>
				</div>
			</Popover>
		</div>
	);
};

export default Share;
