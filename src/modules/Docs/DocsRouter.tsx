import { Route, Routes } from 'react-router';

import { NotFoundScreen } from '@modules/Errors';

import { router } from '.';
import DocsLayout from './DocsLayout';
import DocsScreen from './screens/DocsScreen';

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
