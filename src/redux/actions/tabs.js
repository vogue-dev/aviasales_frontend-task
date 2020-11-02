export const setTabs = (item, tabs) => async (dispatch) => {
	const t = tabs;
	const updatedTabs = t.map((e) => {
		if (item.id === e.id) {
			e.isActive = true;
			return e;
		}
		e.isActive = false;
		return e;
	});
	dispatch(setTabsState(updatedTabs));
};

export const setTabsState = (updatedTabs) => ({
	type: 'SET_SORTING_TABS',
	payload: updatedTabs,
});
