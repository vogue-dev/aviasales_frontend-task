export const setToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getInitFromLocalStorage = (key, data) => {
	const str = localStorage.getItem(key);
	if (!str) {
		return data;
	}
	return JSON.parse(str || '');
};
