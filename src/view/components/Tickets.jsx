import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { gettingData } from '../../redux/actions/tickets';
import { sortByPrice, sortByTime } from '../../redux/actions/sort';
import Ticket from './Ticket';

const Tickets = () => {
	const dispatch = useDispatch();
	const dataTickets = useSelector(({ tickets }) => tickets.dataTickets);
	const filteredTickets = useSelector(({ tickets }) => tickets.filteredTickets);
	const isLoaded = useSelector(({ tickets }) => tickets.isLoaded);
	const sortBy = useSelector(({ sort }) => sort.sortBy);
	// const stopsFilter = useSelector(({ filter }) => filter.stopsFilter);

	if (sortBy === 'price') {
		dispatch(sortByPrice(dataTickets));
	} else if (sortBy === 'time') {
		dispatch(sortByTime(dataTickets));
	}

	useEffect(() => {
		dispatch(gettingData());
	}, [dispatch]);

	return (
		<>
			{isLoaded
				? filteredTickets.map((ticket, index) => <Ticket ticket={ticket} key={index + 1} />)
				: 'loading...'}
		</>
	);
};

export default Tickets;
