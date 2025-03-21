import { Route, Routes } from 'react-router';

import { NotFoundScreen } from '@modules/Errors';

import DocsLayout from './DocsLayout';
import DocsScreen from './screens/DocsScreen';
import { router } from './utils/router';

export const DocsRouter = () => (
	<Routes>
		<Route Component={DocsLayout}>
			{router.map((cat, i) =>
				cat.pages.map((page, j) => (
					<Route key={`${i}-${j}`} path={page.url} element={<DocsScreen {...page} />} />
				)),
			)}
			<Route path="*" Component={NotFoundScreen} />
		</Route>
	</Routes>
);
