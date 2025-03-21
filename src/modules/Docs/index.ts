import { TypeRouter } from '@types';

import { pagesComponents } from './pages/components';
import { pagesHooks } from './pages/hooks';
import { pagesUtils } from './pages/utils';
import { DocsInstallation } from './screens/DocsInstallation';

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
