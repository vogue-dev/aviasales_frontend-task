import React from 'react';

import Ticket from '../components/Ticket';
import Filter from '../components/Filter';
import Logo from '../components/Logo';

const MainPage = () => {
	return (
		<div className="app__wrapper">
			<Logo />
			<div className="filter col-3">
				<div className="counter">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
				<Filter />
			</div>
			<div className="main col-9">
				<div className="sort">
					<div className="tab active">
						<div className="inner">САМЫЙ ДЕШЕВЫЙ</div>
					</div>
					<div className="tab">
						<div className="inner">САМЫЙ БЫСТРЫЙ</div>
					</div>
				</div>
				<Ticket />
				<Ticket />
				<Ticket />
				<Ticket />
				<Ticket />
			</div>
		</div>
	);
};

export default MainPage;
