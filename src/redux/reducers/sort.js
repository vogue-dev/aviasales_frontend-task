const initialState = {
	sortBy: 'price',
};

const sort = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return {
				...state,
				sortBy: action.payload,
			};

		default:
			return state;
	}
};

export default sort;