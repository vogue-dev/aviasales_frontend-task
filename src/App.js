import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gettingData } from './redux/actions/tickets';

import TicketsContainer from './components/Tickets/Tickets';
import Filters from './components/Filters/Filters';
import Tabs from './components/Tabs/Tabs';
import logo from './logo.svg';

const App = () => {
	const dispatch = useDispatch();
	const dataTickets = useSelector(({ state }) => state.dataTickets);
	const isLoaded = useSelector(({ state }) => state.isLoaded);
	const filters = useSelector(({ state }) => state.filters);
	const tabs = useSelector(({ state }) => state.tabs);

	useEffect(() => {
		dispatch(gettingData());
	}, [dispatch]);

	return (
		<div className="app__wrapper">
			<div className="logo">
				<img src={logo} className="logo-img" alt="logo" />
			</div>
			<Filters filters={filters} />
			<div className="main col-9">
				<Tabs tabs={tabs} />
				<TicketsContainer dataTickets={dataTickets} tabs={tabs} isLoaded={isLoaded} />
			</div>
		</div>
	);
};

export default App;
