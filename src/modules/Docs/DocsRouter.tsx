import { Route, Routes } from 'react-router';

import { NotFoundScreen } from '@modules/Errors';

import { router } from '.';
import DocsLayout from './DocsLayout';

export const DocsRouter = () => (
	<Routes>
		<Route Component={DocsLayout}>
			{router.map((cat, i) =>
				cat.pages.map((page, j) => (
					<Route key={`${i}-${j}`} path={page.url} Component={page.Component} />
				)),
			)}
			<Route path="*" Component={NotFoundScreen} />
		</Route>
	</Routes>
);
