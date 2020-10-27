import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { gettingData } from '../../redux/actions/tickets';

import Ticket from './Ticket';

const Tickets = () => {
	const dispatch = useDispatch();
	const dataTickets = useSelector(({ tickets }) => tickets.dataTickets);
	const isLoaded = useSelector(({ tickets }) => tickets.isLoaded);

	useEffect(() => {
		dispatch(gettingData());
	}, [dispatch]);

	return (
		<>
			{console.log('dataTickets:', dataTickets)}
			{isLoaded
				? dataTickets.map((eachTicket, index) => <Ticket eachTicket={eachTicket} key={index} />)
				: 'loading...'}
		</>
	);
};

export default Tickets;
