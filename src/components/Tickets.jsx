import React from 'react';
import { useSelector } from 'react-redux';

import Ticket from './Ticket';

const Tickets = () => {
	const dataTickets = useSelector(({ tickets }) => tickets.dataTickets);
	const isLoaded = useSelector(({ tickets }) => tickets.isLoaded);

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
