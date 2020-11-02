import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gettingData } from './redux/actions/tickets';

import TicketsContainer from './components/Tickets/Tickets';
import Filters from './components/Filters/Filters';
import Tabs from './components/Tabs/Tabs';
import logo from './logo.svg';

const App = () => {
	const dispatch = useDispatch();
	const state = useSelector(({ state }) => state);
	let { filters, tabs } = state;

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
				<TicketsContainer state={state} />
			</div>
		</div>
	);
};

export default App;
