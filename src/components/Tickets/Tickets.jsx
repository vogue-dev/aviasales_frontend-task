import React from 'react';

import { getPrettyPrice, stopsCaseEndings, getTimeOnFly, getFlyingTime } from '../../utils/index';

const Tickets = ({ data, isLoaded }) => {
	return (
		<>
			{isLoaded ? (
				data.map((ticket, index) => (
					<div className="ticket" key={index}>
						<div className="header">
							<div className="price col-6">{getPrettyPrice(ticket.price)}</div>
							<div className="logo-s7 col-6">
								<img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo-s7"></img>
							</div>
						</div>
						{ticket.segments.map((item, i) => (
							<div className="row" key={i}>
								<div className="col-4">
									<div className="header-left">
										{item.origin} – {item.destination}
									</div>
									<div className="body-left">{getTimeOnFly(item.date, item.duration)}</div>
								</div>
								<div className="col-4">
									<div className="header-center">В ПУТИ</div>
									<div className="body-center">{getFlyingTime(item.duration)}</div>
								</div>
								<div className="col-4">
									<div className="header-right">{stopsCaseEndings(item.stops.length)}</div>
									<div className="body-right">{item.stops.join(', ')}</div>
								</div>
							</div>
						))}
					</div>
				))
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

const TicketsContainer = ({ tabs, dataTickets, isLoaded }) => {
	let sortedData = [];

	if (tabs[0].isActive) {
		sortedData = dataTickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
	} else if (tabs[1].isActive) {
		sortedData = dataTickets.sort(
			(ticket_1, ticket_2) => ticket_1.segments[0].duration - ticket_2.segments[0].duration
		);
	}

	return <Tickets data={sortedData} isLoaded={isLoaded} />;
};

export default TicketsContainer;
