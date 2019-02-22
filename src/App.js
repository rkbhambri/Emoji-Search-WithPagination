import React, { Component } from 'react';
import './App.css';
import Emoji from './containers/Emoji';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Emoji />
			</div>
		);
	}
}

export default App;
