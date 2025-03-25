import { Route, Routes } from 'react-router';

import { NotFoundScreen } from '@modules/Errors';

import DocsLayout from './DocsLayout';
import { DocsInstallation } from './screens/DocsInstallation';
import DocsScreen from './screens/DocsScreen';
import { router } from './utils/router';

export const DocsRouter = () => (
	<Routes>
		<Route Component={DocsLayout}>
			<Route path="installation" element={<DocsInstallation nextPage={getNextPage(0, 0)} />} />
			{router.map((cat, i) =>
				cat.pages.map((page, j) => (
					<Route
						key={`${i}-${j}`}
						path={page.url}
						element={
							<DocsScreen
								{...page}
								nextPage={getNextPage(i, j)}
								prevPage={getPrevPage(i, j)}
							/>
						}
					/>
				)),
			)}
			<Route path="*" Component={NotFoundScreen} />
		</Route>
	</Routes>
);

const getPrevPage = (i: number, j: number) => {
	let prevPage = undefined;

	if (j > 0) {
		prevPage = router[i].pages[j - 1];
	} else if (j < 1 && i > 0) {
		prevPage = router[i - 1].pages[router[i - 1].pages.length - 1];
	}

	return prevPage;
};

const getNextPage = (i: number, j: number) => {
	let nextPage = undefined;

	if (j + 1 < router[i].pages.length) {
		nextPage = router[i].pages[j + 1];
	} else if (i + 1 < router.length) {
		nextPage = router[i + 1].pages[0];
	}

	return nextPage;
};
