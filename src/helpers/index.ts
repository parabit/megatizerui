import { To } from 'react-router';

export const goBack = (): To => {
	const h = window.history;
	if (!!h?.length && h.length > 1 && h.state.idx > 0) return -1 as To;
	return '/';
};
