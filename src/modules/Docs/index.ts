import { TypeRouter } from '@types';

import { pagesComponents } from './components';
import { pagesHooks } from './hooks';
import { DocsInstallation } from './screens/DocsInstallation';
import { pagesUtils } from './utils';

export * from './DocsRouter';

export const router: TypeRouter = [
	{
		title: 'Getting started',
		pages: [
			{
				url: 'installation',
				title: 'Installation',
				description: 'How to install and set up megatizerui in your project',
				Component: DocsInstallation,
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
];
