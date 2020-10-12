import React from 'react';

const Ticket = () => {
	return (
		<div className="ticket">
			<div className="header">
				<div className="price col-6">13 400 P</div>
				<div className="logo-s7 col-6">
					<img src="./logo-s7.jpg" alt="logo-s7"></img>
				</div>
			</div>
			<div className="row1">
				<div className="col-4">
					<div className="header-left">MOW – HKT</div>
					<div className="body-left">10:45 – 08:00</div>
				</div>
				<div className="col-4">
					<div className="header-center">В ПУТИ</div>
					<div className="body-center">21ч 15м</div>
				</div>
				<div className="col-4">
					<div className="header-right">2 ПЕРЕСАДКИ</div>
					<div className="body-right">HKG, JNB</div>
				</div>
			</div>
			<div className="row2">
				<div className="col-4">
					<div className="header-left">MOW – HKT</div>
					<div className="body-left">11:20 – 00:50</div>
				</div>
				<div className="col-4">
					<div className="header-center">В ПУТИ</div>
					<div className="body-center">13ч 30м</div>
				</div>
				<div className="col-4">
					<div className="header-right">1 ПЕРЕСАДКА</div>
					<div className="body-right">HKG</div>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
