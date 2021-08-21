import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grow, Container } from '@material-ui/core';
import NavBar from './components/Navigation/NavBar';
import HomePage from './components/Home/HomePage';
import Cause from './components/Cause/Cause';
import Donate from './components/Donation/Donate';
import Fundraise from './components/Fundraise/Fundraise';
import Auth from './components/Auth/Auth';
import Profile from './components/UserProfile/Profile';

function App() {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('userProfile')));
	return (
		<Router>
			<Grow in>
				<Container maxWidth='lg'>
					<NavBar user={user} setUser={setUser} />

					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/cause' exact component={Cause} />
						<Route path='/donate' exact render={(props) => <Donate {...props} user={user} />} />
						<Route path='/fundraise' exact render={(props) => <Fundraise {...props} user={user} />} />
						<Route path='/auth' exact render={(props) => <Auth {...props} setUser={setUser} />} />
						<Route path='/profile' exact render={(props) => <Profile {...props} setUser={setUser} />} />
					</Switch>
				</Container>
			</Grow>
		</Router>
	);
}

export default App;
