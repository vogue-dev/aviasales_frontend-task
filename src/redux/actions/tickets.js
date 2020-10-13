import axios from 'axios';

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const gettingData = () => async (dispatch) => {
	dispatch(setLoaded(false));

	await axios
		.get('https://front-test.beta.aviasales.ru/search')
		.then((searchID) =>
			axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID.data.searchId}`)
		)
		.then((response) => dispatch(setTicketsData(response.data.tickets.slice(0, 5))));
};

export const setTicketsData = (items) => ({
	type: 'SET_TICKETS_DATA',
	payload: items,
});
