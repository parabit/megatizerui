import { createBrowserRouter, RouterProvider } from 'react-router';

import { DocsRouter } from '@modules/Docs';
import { ErrorScreen, NotFoundScreen } from '@modules/Errors';
import { Layout, LayoutHomeScreen } from '@modules/Layout';

const router = createBrowserRouter([
	{
		Component: Layout,
		ErrorBoundary: ErrorScreen,
		children: [
			{
				path: '/megatizerui',
				Component: LayoutHomeScreen,
			},
			{
				path: '/megatizerui/*',
				Component: DocsRouter,
			},
		],
	},
	{
		path: '*',
		Component: NotFoundScreen,
	},
]);

const App = () => <RouterProvider router={router} />;

export default App;
