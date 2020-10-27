import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortByPrice, sortByTime } from '../../redux/actions/tickets';

const Sort = () => {
	const dispatch = useDispatch();
	const dataTickets = useSelector(({ tickets }) => tickets.dataTickets);

	let [activeTab, setActiveTab] = useState(1);

	const onChangeTab = (param) => {
		setActiveTab(param);

		if (param === 1) {
			dispatch(sortByPrice(dataTickets));
		}
		if (param === 2) {
			dispatch(sortByTime(dataTickets));
		}
	};

	return (
		<div className="sort">
			<div className={activeTab === 1 ? 'tab active' : 'tab'} onClick={() => onChangeTab(1)}>
				<div className="inner">САМЫЙ ДЕШЕВЫЙ</div>
			</div>
			<div className={activeTab === 2 ? 'tab active' : 'tab'} onClick={() => onChangeTab(2)}>
				<div className="inner">САМЫЙ БЫСТРЫЙ</div>
			</div>
		</div>
	);
};

export default Sort;
