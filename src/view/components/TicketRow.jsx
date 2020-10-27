import React from 'react';

const TicketRow = ({ eachTicketInfo, row }) => {
	let seconds = eachTicketInfo.duration;
	let origin = eachTicketInfo.origin;
	let destination = eachTicketInfo.destination;
	let date = eachTicketInfo.date;

	let stopsCount = eachTicketInfo.stops.length;
	let stops = eachTicketInfo.stops;
	let stopsArray = stops.join(', ');

	const stopsCounter = (stopsCount) => {
		if (stopsCount === 0) {
			return 'Без пересадок';
		} else if (stopsCount === 1) {
			return '1 ПЕРЕСАДКА';
		} else if (stopsCount === 2 || 3) {
			return `${stopsCount} ПЕРЕСАДКИ`;
		} else return 'Error';
	};

	const countingFlyingTime = (seconds) => {
		let hours = (seconds / 60) ^ 0;
		let mimutes = seconds % 60;
		let flyingTime = `${hours}ч ${mimutes}м`;
		return flyingTime;
	};

	const setDate = (date) => {
		let result = date.match(/\d\d:\d\d/);

		return result[0];
	};

	return (
		<>
			<div className={row}>
				{/* {console.log(row, 'eachTicketInfo', eachTicketInfo)} */}
				<div className="col-4">
					<div className="header-left">
						{origin} – {destination}
					</div>
					<div className="body-left">
						{setDate(date)} – {setDate(date)}
					</div>
				</div>
				<div className="col-4">
					<div className="header-center">В ПУТИ</div>
					<div className="body-center">{countingFlyingTime(seconds)}</div>
				</div>
				<div className="col-4">
					<div className="header-right">{stopsCounter(stopsCount)}</div>
					<div className="body-right">{stopsArray}</div>
				</div>
			</div>
		</>
	);
};

export default TicketRow;
