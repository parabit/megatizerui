import { createBrowserRouter, RouterProvider } from 'react-router';

import { DocsRouter } from '@modules/Docs';
import { ErrorScreen, NotFoundScreen } from '@modules/Errors';
import { LayoutScreen } from '@modules/Layout';

const router = createBrowserRouter([
	{
		Component: LayoutScreen,
		ErrorBoundary: ErrorScreen,
		children: [
			{
				index: true,
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
