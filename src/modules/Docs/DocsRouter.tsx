import { Route, Routes } from 'react-router';

import { NotFoundScreen } from '@modules/Errors';

import DocsLayout from './DocsLayout';
import DocsHomeScreen from './screens/DocsHomeScreen';

export const DocsRouter = () => (
	<Routes>
		<Route Component={DocsLayout}>
			<Route index Component={DocsHomeScreen} />
			<Route path="*" element={<NotFoundScreen to="/test" />} />
		</Route>
	</Routes>
);
