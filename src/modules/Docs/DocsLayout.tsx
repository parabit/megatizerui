import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Div, HStack } from '@lib';

import DocsASide from './components/DocsASide';

const DocsLayout = () => (
	<HStack className="h-full w-full">
		<DocsASide />

		<Div className="flex flex-10 overflow-hidden">
			<Suspense>
				<Outlet />
			</Suspense>
		</Div>
	</HStack>
);

export default DocsLayout;
