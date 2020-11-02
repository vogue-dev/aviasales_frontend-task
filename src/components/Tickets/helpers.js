import { sortByPrice, sortByTime } from '../../utils';

// export const filterDataByTabs = (data, tabs) => {
// 	let sortedData;

// 	if (tabs[0].isActive) {
// 		sortedData = data.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
// 		return sortedData;
// 	} else if (tabs[1].isActive) {
// 		sortedData = data.sort((ticket_1, ticket_2) => ticket_1.segments[0].duration - ticket_2.segments[0].duration);
// 		return sortedData;
// 	}
// 	return sortedData;
// };

// export const filterDataByFilters = () => {
// 	console.log('gagaggag');
// };

function getFilteredTickets(appliedFilters, tickets) {
	const activeValues = appliedFilters.map((e) => e.value);

	if (activeValues.length > 0) {
		const filteredTickets = tickets.filter((e) => {
			const stops = e.segments
				.map((e) => e.stops)
				.sort((a, b) => {
					if (a.length < b.length) {
						return 1;
					}
					return -1;
				});

			const count = stops[0].length;

			if (activeValues.includes(count)) {
				return true;
			}
			return false;
		});
		return filteredTickets;
	}
	return tickets;
}

function getSortedTickets(activeTabId, tickets) {
	if (activeTabId === 1) {
		const sortedTickets = tickets.sort(sortByPrice);
		return sortedTickets;
	}

	if (activeTabId === 2) {
		const sortedTickets = tickets.sort(sortByTime);
		return sortedTickets;
	}

	return tickets;
}

export { getFilteredTickets, getSortedTickets };
