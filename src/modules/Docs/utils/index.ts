import { pagesComponents } from './pagesComponents';
import { pagesHooks } from './pagesHooks';
import { pagesMore } from './pagesMore';
import { pagesUtils } from './pagesUtils';

export * from '../DocsRouter';

export const router: TypeRoute[] = [
	{
		title: 'Getting started',
		pages: [
			{
				url: 'installation',
				title: 'Installation',
				description: '',
			},
			{
				url: 'color_palette',
				title: 'Color Palette',
				description: '',
			},
		],
	},
	{
		title: 'Components',
		pages: pagesComponents,
	},
	{
		title: 'Hooks',
		pages: pagesHooks,
	},
	{
		title: 'Utils',
		pages: pagesUtils,
	},
	{
		title: 'More',
		pages: pagesMore,
	},
];

export const getPrevPage = (i: number, j: number) => {
	let prevPage = undefined;

	if (j > 0) {
		prevPage = router[i].pages[j - 1];
	} else if (j < 1 && i > 0) {
		prevPage = router[i - 1].pages[router[i - 1].pages.length - 1];
	}

	return prevPage;
};

export const getNextPage = (i: number, j: number) => {
	let nextPage = undefined;

	if (j + 1 < router[i].pages.length) {
		nextPage = router[i].pages[j + 1];
	} else if (i + 1 < router.length) {
		nextPage = router[i + 1].pages[0];
	}

	return nextPage;
};
