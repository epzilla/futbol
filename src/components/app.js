import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Config from '../config';
import Header from './header';
import Home from '../routes/home';
// import Stats from '../routes/stats';
// import Yearly from '../routes/yearly';
// import Depth from '../routes/depth';
// import Recruiting from '../routes/recruiting';
// import Admin from '../routes/admin';
// import Login from '../routes/login';
// import Logout from '../routes/logout';
// import Signup from '../routes/signup';
// import Profile from '../routes/profile';
import NotSoSecretCode from './notSoSecretCode';
import GlobalKeyboardShortcuts from './globalKeyboardShortcuts';
import KeyboardShortcutHelp from './keyboardShortcutHelp';
import Rest from '../lib/rest-service';
import LocalStorageService from '../lib/local-storage-service';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header config={Config} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
