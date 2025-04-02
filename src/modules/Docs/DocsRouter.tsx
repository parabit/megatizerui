import { Route, Routes } from 'react-router';

import { NotFoundScreen } from '@modules/Errors';

import DocsLayout from './DocsLayout';
import DocsColorPaletteScreen from './screens/DocsColorPaletteScreen';
import DocsInstallationScreen from './screens/DocsInstallationScreen';
import DocsScreen from './screens/DocsScreen';
import { getNextPage, getPrevPage, router } from './utils';

export const DocsRouter = () => (
	<Routes>
		<Route Component={DocsLayout}>
			<Route
				path="installation"
				element={<DocsInstallationScreen nextPage={getNextPage(0, 0)} />}
			/>
			<Route
				path="color_palette"
				element={
					<DocsColorPaletteScreen prevPage={getPrevPage(0, 1)} nextPage={getNextPage(0, 1)} />
				}
			/>
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
