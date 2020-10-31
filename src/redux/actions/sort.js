export const sortByPrice = (dataTickets) => async (dispatch) => {
	let sortedData = dataTickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
	dispatch(setSortedTickets(sortedData));
};

export const sortByTime = (dataTickets) => async (dispatch) => {
	let sortedData = dataTickets.sort(
		(ticket_1, ticket_2) => ticket_1.segments[0].duration - ticket_2.segments[0].duration
	);
	dispatch(setSortedTickets(sortedData));
};

export const setSortedTickets = (data) => ({
	type: 'SET_SORTED_TICKETS',
	payload: data,
});

export const setSortBy = (tab) => ({
	type: 'SET_SORT_BY',
	payload: tab,
});
