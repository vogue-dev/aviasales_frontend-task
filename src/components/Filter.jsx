import React from 'react';

const Checkbox = () => {
	return (
		<div className="filter col-3">
			<div className="counter">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
			<div className="count row">
				<ul>
					<label htmlFor="checkbox">
						<li>
							<input className="check" type="checkbox" id="checkbox" />
							<span className="checkmark"></span>
							<div>Все</div>
						</li>
					</label>
					<label htmlFor="checkbox-widthout">
						<li>
							<input className="check" type="checkbox" id="checkbox-widthout" />
							<span className="checkmark"></span>
							<div>Без пересадок</div>
						</li>
					</label>
					<label htmlFor="checkbox-1">
						<li>
							<input className="check" type="checkbox" id="checkbox-1" />
							<span className="checkmark"></span>
							<div>1 пересадка</div>
						</li>
					</label>
					<label htmlFor="checkbox-2">
						<li>
							<input className="check" type="checkbox" id="checkbox-2" />
							<span className="checkmark"></span>
							<div>2 пересадки</div>
						</li>
					</label>
					<label htmlFor="checkbox-3">
						<li>
							<input className="check" type="checkbox" id="checkbox-3" />
							<span className="checkmark"></span>
							<div>3 пересадки</div>
						</li>
					</label>
				</ul>
			</div>
		</div>
	);
};

export default Checkbox;
