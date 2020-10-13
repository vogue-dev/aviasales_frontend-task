import React from 'react';

const Ticket = ({ eachTicket, index }) => {
	let price = eachTicket.price;
	let durationFirst = eachTicket.segments[0].duration;
	let durationSecond = eachTicket.segments[1].duration;
	let originFirst = eachTicket.segments[0].origin;
	let originSecond = eachTicket.segments[0].destination;
	let destinationFirst = eachTicket.segments[1].origin;
	let destinationSecond = eachTicket.segments[1].destination;

	// расчет количества пересадок и города в которых они будут производиться
	let stopsFirst = eachTicket.segments[0].stops;
	let stopsSecond = eachTicket.segments[1].stops;
	let stopsFirstString = stopsFirst.join(', ');
	let stopsSecondString = stopsSecond.join(', ');
	let stopsCount1 = stopsFirst.length;
	let stopsCount2 = stopsSecond.length;

	// расчет времени полета
	let h1 = (durationFirst / 60) ^ 0;
	let m1 = durationFirst % 60;
	let duration1 = `${h1}ч ${m1}м`;

	let h2 = (durationSecond / 60) ^ 0;
	let m2 = durationSecond % 60;
	let duration2 = `${h2}ч ${m2}м`;

	return (
		<div className="ticket" key={index}>
			<div className="header">
				<div className="price col-6">
					{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р
				</div>
				<div className="logo-s7 col-6">
					<img src="./logo-s7.jpg" alt="logo-s7"></img>
				</div>
			</div>
			<div className="row1">
				<div className="col-4">
					<div className="header-left">
						{originFirst} – {destinationFirst}
					</div>
					<div className="body-left">10:45 – 08:00</div>
				</div>
				<div className="col-4">
					<div className="header-center">В ПУТИ</div>
					<div className="body-center">{duration1}</div>
				</div>
				<div className="col-4">
					<div className="header-right">
						{stopsCount1} {stopsCount1 === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'}
					</div>
					<div className="body-right">{stopsFirstString}</div>
				</div>
			</div>
			<div className="row2">
				<div className="col-4">
					<div className="header-left">
						{originSecond} – {destinationSecond}
					</div>
					<div className="body-left">11:20 – 00:50</div>
				</div>
				<div className="col-4">
					<div className="header-center">В ПУТИ</div>
					<div className="body-center">{duration2}</div>
				</div>
				<div className="col-4">
					<div className="header-right">
						{stopsCount2} {stopsCount2 === 1 ? 'ПЕРЕСАДКА' : 'ПЕРЕСАДКИ'}
					</div>
					<div className="body-right">{stopsSecondString}</div>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
