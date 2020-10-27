import React from 'react';
import { useState } from 'react';

const StopsFilterCheckboxes = ({ value, stops, id, isChecked }) => {
	let [Checked, setChecked] = useState([]);

	const onChangeCheckboxes = (id) => {
		const currentIndex = Checked.indexOf(id);
		const newChecked = [...Checked];

		if (id === -1) {
			newChecked[id].push(id);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);

		console.log('currentIndex', currentIndex);
		console.log('newChecked', newChecked);
	};

	return (
		<label htmlFor="checkbox">
			{console.log('Checked', Checked)}
			<li>
				<input
					className="check"
					type="checkbox"
					id={stops}
					checked={isChecked}
					onClick={() => onChangeCheckboxes(id)}
				/>
				<span className="checkmark"></span>
				<div>{value}</div>
			</li>
		</label>
	);
};

export default StopsFilterCheckboxes;
