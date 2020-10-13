import React, { useState } from 'react';

const Sort = () => {
	let [activeTab, setActiveTab] = useState(1);

	const onChangeTab = (param) => {
		setActiveTab(param);
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
