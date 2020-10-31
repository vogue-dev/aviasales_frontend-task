import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setSortBy } from '../redux/actions/sort';

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
	const sortBy = useSelector(({ sort }) => sort.sortBy);

	const onSelectSortType = (item, sortBy) => {
		const oldTabs = sortBy;
		console.log('sortBy', sortBy);
		console.log('oldTabs', oldTabs);
		console.log('item.id', item.id);
		const updatedTabs = oldTabs.map((oldTab) => {
			if (item.id === oldTab.id) {
				oldTab.isActive = true;
				return oldTab;
			}
			oldTab.isActive = false;
			return oldTab;
		});

		console.log('updatedTabs', updatedTabs);
		dispatch(setSortBy(updatedTabs));
	};

	return (
		<SortingTabs>
			{sortBy.map((item) => (
				<div
					className={item.isActive ? 'tab active' : 'tab'}
					onClick={() => onSelectSortType(item)}
					key={item.id}
				>
					<div className="inner">{item.text}</div>
				</div>
			))}

			{/* <div className={sortBy === 'price' ? 'tab active' : 'tab'} onClick={() => onSelectSortType('price')}>
				<div className="inner">САМЫЙ ДЕШЕВЫЙ</div>
			</div>

			<div className={sortBy === 'time' ? 'tab active' : 'tab'} onClick={() => onSelectSortType('time')}>
				<div className="inner">САМЫЙ БЫСТРЫЙ</div>
			</div> */}
		</SortingTabs>
	);
};

export default Sort;
