import React from 'react';

import Ticket from '../components/Ticket';
import Checkbox from '../components/Checkbox';
import Logo from '../components/Logo';

const MainPage = () => {
	return (
		<div className="app__wrapper">
			<Logo />
			<div className="filter col-3">
				<div className="counter">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
				<Checkbox />
			</div>
			<div className="main col-9">
				<div className="tabs row">
					<div className="cheapiest">
						<div className="inner">САМЫЙ ДЕШЕВЫЙ</div>
					</div>
					<div className="fastest">
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
