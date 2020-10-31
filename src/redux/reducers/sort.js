// import { setToLocalStorage, getInitFromLocalStorage } from '../../utils/index.js';

// const initialState = {
// 	sortBy: setToLocalStorage('tabs', [
// 		{
// 			id: 1,
// 			text: 'Самый быстрый',
// 			isActive: true,
// 		},
// 		{
// 			id: 2,
// 			text: 'Самый дешевый',
// 			isActive: false,
// 		},
// 	]),
// };

// const sort = (state = initialState, action) => {
// 	console.log('SET_SORT_BY', action.payload);
// 	switch (action.type) {
// 		case 'SET_SORT_BY':
// 			setToLocalStorage('tabs', action.payload);
// 			return {
// 				...state,
// 				sortBy: action.payload,
// 			};

// 		default:
// 			return state;
// 	}
// };

// export default sort;
