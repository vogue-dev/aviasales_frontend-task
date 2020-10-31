import React from 'react';

import Tickets from './components/Tickets';
import Filter from './components/Filter';
import Sort from './components/Sort';
import logo from './logo.svg';

const App = () => {
	return (
		<div className="app__wrapper">
			<div className="logo">
				<img src={logo} className="logo-img" alt="logo" />
			</div>
			<Filter />
			<div className="main col-9">
				<Sort />
				<Tickets />
			</div>
		</div>
	);
};

export default App;
