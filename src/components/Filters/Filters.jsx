import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setFilter } from '../../redux/actions/filters';

const StopsFilterHeading = styled.div`
	 {
		width: 100%;
		height: 53px;
		left: 123px;
		top: 180px;
		padding: 0 20px 0 20px !important;
		margin-bottom: -11px;

		font-family: Open Sans;
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 12px;
		/* identical to box height, or 100% */

		display: flex;
		align-items: center;
		justify-content: flex-start;

		letter-spacing: 0.5px;
		text-transform: uppercase;

		color: #4a4a4a;
	}
`;

const Filters = ({ filters }) => {
	const dispatch = useDispatch();

	const onSelectFilter = (item) => {
		dispatch(setFilter(item, filters));
	};

	return (
		<div className="filter col-3">
			<StopsFilterHeading>КОЛИЧЕСТВО ПЕРЕСАДОК</StopsFilterHeading>
			<div className="count row">
				<ul>
					{filters.map((item, i) => (
						<label htmlFor="checkbox" onClick={() => onSelectFilter(item)} key={i}>
							<li>
								<input className="check" type="checkbox" id={i} checked={item.isChecked} />
								<span className="checkmark"></span>
								<div>{item.text}</div>
							</li>
						</label>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Filters;
