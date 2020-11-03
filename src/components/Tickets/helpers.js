import { sortByPrice, sortByTime } from '../../utils';

function getFilteredTickets(appliedFilters, tickets) {
	const activeValues = appliedFilters.map((e) => e.value);
	console.log('activeValues', activeValues);

	if (activeValues.length > 0) {
		const filteredTickets = tickets.filter((e) => {
			const stops = e.segments
				.map((e) => e.stops)
				.sort((a, b) => {
					if (a.length < b.length) {
						return 1;
					} else if (a.length < b.length) {
						return 0;
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
