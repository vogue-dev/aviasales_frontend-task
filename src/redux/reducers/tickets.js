const initialState = {
	dataTickets: [],
	isLoaded: false,
};

const tickets = (state = initialState, action) => {
	console.log('action.payload', action.payload);
	switch (action.type) {
		case 'SET_TICKETS_DATA':
			return {
				...state,
				dataTickets: action.payload,
				isLoaded: true,
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
