const initialState = {
	dataTickets: [],
	filteredTickets: [],
	isLoaded: false,
};

const tickets = (state = initialState, action) => {
	// console.log('DATA_TICKETS.action.payload', action);

	switch (action.type) {
		case 'SET_TICKETS_DATA':
			// const newTickets = action.payload.sort(
			// 	(ticket_1, ticket_2) => ticket_1.price - ticket_2.price
			// );
			return {
				...state,
				dataTickets: action.payload,
				isLoaded: true,
			};

		case 'SET_SORTED_TICKETS':
			return {
				...state,
				filteredTickets: action.payload,
			};

		case 'SET_LOADED':
			return {
				...state,
				isLoaded: action.payload,
			};
		default:
			return state;
	}
};

export default tickets;
