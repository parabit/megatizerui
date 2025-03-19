import { Suspense } from 'react';
import { Outlet } from 'react-router';

import noise from '@assets/noise.png';
import { useTheme } from '@hooks';
import { Div } from '@lib';

export const LayoutScreen = () => {
	useTheme();

	return (
		<Div className="bg-bg-light dark:bg-bg-dark w-full h-screen">
			<Div
				style={{
					backgroundImage: `url(${noise})`,
					backgroundRepeat: 'repeat',
					backgroundSize: '109px',
					position: 'fixed',
					width: '100%',
					height: '100%',
					top: 0,
					opacity: '0.06',
				}}
			/>

			<Div className="relative w-full h-screen">
				<Suspense>
					<Outlet />
				</Suspense>
			</Div>
		</Div>
	);
};
