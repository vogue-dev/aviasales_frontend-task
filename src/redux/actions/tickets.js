import axios from 'axios';

export const gettingData = () => async (dispatch) => {
	dispatch(setLoaded(false));

	const fetchingData = async () => {
		let result = await axios('https://front-test.beta.aviasales.ru/search')
			.then((searchID) =>
				axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID.data.searchId}`)
			)
			.then((data) => data.data.tickets.slice(0, 5));

		// await dispatch(setTicketsData(result));
		await dispatch(sortByPrice(result));
	};
	fetchingData();
};

export const sortByPrice = (data) => (dispatch) => {
	let sortedData = data.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
	dispatch(setTicketsData(sortedData));
};

export const sortByTime = (data) => (dispatch) => {
	let sortedData = data.sort(
		(ticket_1, ticket_2) => ticket_1.segments[0].duration - ticket_2.segments[0].duration
	);
	dispatch(setTicketsData(sortedData));
};

export const setTicketsData = (items) => ({
	type: 'SET_TICKETS_DATA',
	payload: items,
});

// export const setSortedData = (items) => ({
// 	type: 'SET_SORTED_TICKETS_DATA',
// 	payload: items,
// });

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});
