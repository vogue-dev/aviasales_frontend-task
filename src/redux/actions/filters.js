// export const sortByPrice = (dataTickets) => async (dispatch) => {
// 	let sortedData = dataTickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
// 	dispatch(setSortedTickets(sortedData));
// };

// export const sortByTime = (dataTickets) => async (dispatch) => {
// 	let sortedData = dataTickets.sort(
// 		(ticket_1, ticket_2) => ticket_1.segments[0].duration - ticket_2.segments[0].duration
// 	);
// 	dispatch(setSortedTickets(sortedData));
// };

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
