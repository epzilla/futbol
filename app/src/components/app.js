import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Config from '../config';
import Header from './header';
import Home from '../routes/home';
import Footer from './footer';
import DebugConsole from './debugConsole';
import NotSoSecretCode from './notSoSecretCode';
import GlobalKeyboardShortcuts from './globalKeyboardShortcuts';
import KeyboardShortcutHelp from './keyboardShortcutHelp';
import Rest from '../lib/rest-service';
import LocalStorageService from '../lib/local-storage-service';

export default class App extends Component {
	constructor(props) {
    super(props);
    this.ls = LocalStorageService;
    this.state = {
      menu: false,
      team: { code: '' },
      games: [],
      teams: [],
      kb: false,
      debugConsole: true,
      currentYearGames: []
    };
    this.config = Config;
    let conf = this.ls.get('config');
    this.config = Config || conf;
    if (Config && JSON.stringify(conf) !== JSON.stringify(Config)) {
      this.ls.set('config', Config);
    }
  }

	/**
	 *  Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
    this.currentUrl = e.url;
    this.setState({ menu: false});
  };

	menuToggledCallback = (menu) => {
    this.setState({ menu });
  };

  showKeyboardShortcuts = () => {
    this.setState({ kb: true });
  };

  hideKeyboardShortcuts = () => {
    this.setState({ kb: false });
  };

  toggleKeyboardShortcuts = () => {
    this.setState({ kb: !this.state.kb });
  };

  escapeKeyCallback = () => {
    if (this.state.kb) {
      this.hideKeyboardShortcuts();
    }
  };

  hideDebugConsole = () => {
    this.setState({ debugConsole: false });
  };

  showDebugConsole = () => {
    this.setState({ debugConsole: true });
  };

	componentDidMount() {
    // Set CSS Custom Properties
    if (this.config && this.config.themeProperties) {
      Object.keys(this.config.themeProperties).forEach(key => {
        document.body.style.setProperty(`--${key}`, this.config.themeProperties[key]);
      });
    }

    this.currentYear = new Date().getFullYear();
    Rest.get('teams').then(teams => this.setState({ teams }));
    Rest.get(`team/${this.config.team}`).then(team => {
    	this.setState({ team });
    }).then(() => {
    	if (this.state.team) {
    		Rest.get(`games-by-team-season/${this.state.team.id}/${this.currentYear}`).then(currentYearGames => {
    			this.setState({ currentYearGames });
    		})
    	}
    });
  }

	render() {
		return (
			<div id="app">
				<Header
					config={this.config}
					menuToggledCallback={(e) => this.menuToggledCallback(e)}
					showKeyboardShortcuts={() => this.showKeyboardShortcuts()}
				/>
				<Router onChange={this.handleRoute}>
					<Home path="/" games={this.state.currentYearGames} team={this.state.team} teams={this.state.teams} />
				</Router>
				<Footer slogan={this.config.teamSlogan} img={`assets/badges/${this.state.team.code}.svg`} />
        {
          (this.config.devMode && !this.state.debugConsole) ?
          <div class="debug-mode-btn-container" onClick={() => this.showDebugConsole()}>
              <i class="fa fa-bug"></i>
          </div>
          : null
        }
        <DebugConsole show={this.state.debugConsole} close={this.hideDebugConsole} />
				<NotSoSecretCode config={this.config} menu={this.state.menu} />
        <GlobalKeyboardShortcuts
          toggleKeyboardShortcuts={this.toggleKeyboardShortcuts}
          escape={this.escapeKeyCallback}
        />
        <KeyboardShortcutHelp config={this.config} show={this.state.kb} dismiss={() => this.hideKeyboardShortcuts()} />
        <audio preload id="highlight-sound" src={this.config.highlightSound} />
        <audio preload id="secret-sound" src="/assets/secret.wav" />
			</div>
		);
	}
}
