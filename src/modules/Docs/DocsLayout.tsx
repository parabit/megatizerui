import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Div, Stack } from '@lib';

import DocsHeader from './components/DocsHeader';

const DocsLayout = () => (
	<Stack className="h-full w-full">
		<DocsHeader />

		<Div className="max-w-[1152px] w-full self-center h-full">
			<Suspense>
				<Outlet />
			</Suspense>
		</Div>
	</Stack>
);

export default DocsLayout;
