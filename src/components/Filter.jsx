import React from 'react';
import styled from 'styled-components';
import StopsFilter from './StopsFilter';

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

const Checkbox = () => {
	return (
		<div className="filter col-3">
			<StopsFilterHeading>КОЛИЧЕСТВО ПЕРЕСАДОК</StopsFilterHeading>
			<StopsFilter />
		</div>
	);
};

export default Checkbox;
