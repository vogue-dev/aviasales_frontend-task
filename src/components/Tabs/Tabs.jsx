import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTabs } from '../../redux/actions/tabs';
import './tabs.scss';

const Tabs = () => {
	const dispatch = useDispatch();
	const tabs = useSelector(({ state }) => state.tabs);

	const onSelectTab = (item) => {
		dispatch(setTabs(item, tabs));
	};

	return (
		<div className="tabs-wrapper">
			{tabs.map((tab) => (
				<div className={tab.isActive ? 'tab active' : 'tab'} onClick={() => onSelectTab(tab)} key={tab.id}>
					<div className="inner">{tab.text}</div>
				</div>
			))}
		</div>
	);
};

export default Tabs;
