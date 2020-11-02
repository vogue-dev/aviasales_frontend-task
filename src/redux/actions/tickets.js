import axios from 'axios';

export const gettingData = () => async (dispatch) => {
	dispatch(setLoaded(false));

	const fetchingData = async () => {
		let response = await axios('https://front-test.beta.aviasales.ru/search').then((searchID) =>
			axios
				.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchID.data.searchId}`)
				.catch((error) => console.log(error.response))
		);

		let slicedData = await response.data.tickets.slice(0, 5);
		dispatch(setTicketsData(slicedData));
	};
	fetchingData();
};

export const setTicketsData = (items) => ({
	type: 'SET_TICKETS_DATA',
	payload: items,
});

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});
