import React from 'react';
import { availableStops } from '../../utils/constants';
import StopsFilterCheckboxes from './StopsFilterCheckboxes';

const FilterStops = () => {
	return (
		<div className="count row">
			<ul>
				{availableStops.map((eachCheckbox) => (
					<StopsFilterCheckboxes {...eachCheckbox} key={eachCheckbox.id} />
				))}
			</ul>
		</div>
	);
};

export default FilterStops;
