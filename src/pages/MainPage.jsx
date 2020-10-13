import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Tickets from '../components/Tickets';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Logo from '../components/Logo';

import { gettingData } from '../redux/actions/tickets';

const MainPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(gettingData());
	}, [dispatch]);

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
