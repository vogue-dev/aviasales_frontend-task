import React from 'react';

import TicketRow from './TicketRow.jsx';

const Ticket = ({ ticket, index }) => {
	let price = ticket.price;
	// let eachTickerRowInfo1 = ticket.segments[0];
	// let eachTickerRowInfo2 = ticket.segments[1];

	const priceConverter = (price) => {
		return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р`;
	};

	return (
		<div className="ticket" key={index}>
			<div className="header">
				<div className="price col-6">{priceConverter(price)}</div>
				<div className="logo-s7 col-6">
					<img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="logo-s7"></img>
				</div>
			</div>
			{ticket.segments.map((item, index) => (
				<TicketRow item={item} row={'row'} key={index + 1} />
			))}

			{/* <TicketRow eachTicketInfo={eachTickerRowInfo1} row={'row1'} />
			<TicketRow eachTicketInfo={eachTickerRowInfo2} row={'row2'} /> */}
		</div>
	);
};

export default Ticket;
