import { pagesComponents } from './pagesComponents';
import { pagesHooks } from './pagesHooks';
import { pagesUtils } from './pagesUtils';

export * from '../DocsRouter';

export const router: TypeRoute[] = [
	{
		title: 'Getting started',
		pages: [
			{
				url: 'installation',
				title: 'Installation',
				description: 'How to install and set up megatizerui in your project',
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
		pages: [
			{
				url: 'prettier-config',
				title: 'prettier config',
				description:
					'This library represents the corporate design of the code of the Parabit company',
			},
		],
	},
];
