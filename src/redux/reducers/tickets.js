const initialState = {
	dataTickets: [],
	// dataTicketsSorted: [],
	isLoaded: false,
};

const tickets = (state = initialState, action) => {
	console.log('action.payload', action);
	switch (action.type) {
		case 'SET_TICKETS_DATA':
			return {
				...state,
				dataTickets: action.payload,
				isLoaded: true,
			};

		// case 'SET_SORTED_TICKETS_DATA':
		// 	return {
		// 		...state,
		// 		dataTicketsSorted: action.payload,
		// 	};

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
