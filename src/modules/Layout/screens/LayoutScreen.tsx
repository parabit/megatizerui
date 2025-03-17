import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { useTheme } from '@hooks';
import { Div } from '@lib';

export const LayoutScreen = () => {
	useTheme();

	return (
		<Div className="bg-bg-light dark:bg-bg-dark h-screen w-full">
			<Suspense>
				<Outlet />
			</Suspense>
		</Div>
	);
};
