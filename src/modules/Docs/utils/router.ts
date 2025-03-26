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
