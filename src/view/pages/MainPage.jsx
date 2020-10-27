import React from 'react';

import Tickets from '../components/Tickets';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Logo from '../components/Logo';

const MainPage = () => {
	return (
		<div className="app__wrapper">
			<Logo />
			<Filter />
			<div className="main col-9">
				<Sort />
				<Tickets />
			</div>
		</div>
	);
};

export default MainPage;
