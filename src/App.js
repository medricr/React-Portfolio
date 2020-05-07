import React from 'react';

// import { Fade } from 'reactstrap';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Bio from './components/Bio';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Router>
					<NavBar />
					<Switch>
						<Route exact path='/' component={Bio} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
