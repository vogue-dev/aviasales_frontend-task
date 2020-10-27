import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { sortByPrice, sortByTime } from '../../redux/actions/tickets';

const SortingTabs = styled.div`
	 {
		width: 100%;
		border-radius: 5px;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
		display: inline-flex;

		& :first-child {
			border-radius: 5px 0 0 5px;
		}

		& :last-child {
			border-radius: 0 5px 5px 0;
		}
	}
`;

const Sort = () => {
	const dispatch = useDispatch();
	const dataTickets = useSelector(({ tickets }) => tickets.dataTickets);
	let data = dataTickets.slice();

	let [activeTab, setActiveTab] = useState(1);

	const onChangeTab = (param) => {
		setActiveTab(param);

		if (param === 1 && activeTab !== param) {
			dispatch(sortByPrice(data));
		} else if (param === 2 && activeTab !== param) {
			dispatch(sortByTime(data));
		}
	};

	return (
		<SortingTabs>
			<div className={activeTab === 1 ? 'tab active' : 'tab'} onClick={() => onChangeTab(1)}>
				<div className="inner">САМЫЙ ДЕШЕВЫЙ</div>
			</div>
			<div className={activeTab === 2 ? 'tab active' : 'tab'} onClick={() => onChangeTab(2)}>
				<div className="inner">САМЫЙ БЫСТРЫЙ</div>
			</div>
		</SortingTabs>
	);
};

export default Sort;
