export const setFilter = (item, filters) => (dispatch) => {
	const f = filters;
	let updatedFilters;

	if (item.id === 1) {
		let value = !item.isChecked;
		updatedFilters = f.map((e) => {
			e.isChecked = value;
			return e;
		});
	} else {
		updatedFilters = f.map((e) => {
			if (e.id === 1) {
				e.isChecked = false;
			}
			if (item.id === e.id) {
				e.isChecked = !e.isChecked;
			}
			return e;
		});
	}
	dispatch(setTabsState(updatedFilters));
};

export const setTabsState = (updatedFilters) => ({
	type: 'SET_FILTERS',
	payload: updatedFilters,
});
