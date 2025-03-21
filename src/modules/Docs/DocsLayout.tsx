import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { Div } from '@lib';

import './docs.css';

import DocsASide from './components/DocsASide';

const DocsLayout = () => (
	<Div className="w-full h-full">
		<DocsASide />

		<Div className="docs-outlet">
			<Suspense>
				<Outlet />
			</Suspense>
		</Div>
	</Div>
);

export default DocsLayout;
