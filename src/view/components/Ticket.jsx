import React from 'react';

import TicketRow from './TicketRow.jsx';

const Ticket = ({ eachTicket, index }) => {
	let price = eachTicket.price;
	let eachTickerRowInfo1 = eachTicket.segments[0];
	let eachTickerRowInfo2 = eachTicket.segments[1];

	const priceConverter = (price) => {
		return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р`;
	};

	return (
		<div className="ticket" key={index}>
			<div className="header">
				<div className="price col-6">{priceConverter(price)}</div>
				<div className="logo-s7 col-6">
					<img src={require('../../images/logoS7.jpg')} alt="logo-s7"></img>
				</div>
			</div>
			<TicketRow eachTicketInfo={eachTickerRowInfo1} row={'row1'} />
			<TicketRow eachTicketInfo={eachTickerRowInfo2} row={'row2'} />
		</div>
	);
};

export default Ticket;
